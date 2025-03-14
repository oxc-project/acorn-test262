__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1010,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 124,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 81,
        "decorators": [],
        "name": "SyncSequenceFactory",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 84,
        "end": 123,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 87,
          "end": 123,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 90,
            "end": 123,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 99,
              "end": 123,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 100,
                  "end": 106
                },
                {
                  "type": "TSStringKeyword",
                  "start": 108,
                  "end": 114
                },
                {
                  "type": "TSStringKeyword",
                  "start": 116,
                  "end": 122
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 90,
              "end": 99,
              "decorators": [],
              "name": "Generator",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 126,
      "end": 199,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 151,
        "decorators": [],
        "name": "AsyncSequenceFactory",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 154,
        "end": 198,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 157,
          "end": 198,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 160,
            "end": 198,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 174,
              "end": 198,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 175,
                  "end": 181
                },
                {
                  "type": "TSStringKeyword",
                  "start": 183,
                  "end": 189
                },
                {
                  "type": "TSStringKeyword",
                  "start": 191,
                  "end": 197
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 160,
              "end": 174,
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 201,
      "end": 266,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 221,
        "decorators": [],
        "name": "SequenceFactory",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 224,
        "end": 266,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 224,
            "end": 243,
            "typeName": {
              "type": "Identifier",
              "start": 224,
              "end": 243,
              "decorators": [],
              "name": "SyncSequenceFactory",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 246,
            "end": 266,
            "typeName": {
              "type": "Identifier",
              "start": 246,
              "end": 266,
              "decorators": [],
              "name": "AsyncSequenceFactory",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 446,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 306,
            "decorators": [],
            "name": "syncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 287,
                "end": 306,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 306,
                  "decorators": [],
                  "name": "SyncSequenceFactory",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 309,
            "end": 446,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 321,
              "end": 446,
              "body": [
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
                        "end": 333,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 336,
                        "end": 338,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "WhileStatement",
                  "start": 342,
                  "end": 397,
                  "body": {
                    "type": "BlockStatement",
                    "start": 354,
                    "end": 397,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 360,
                        "end": 393,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 360,
                          "end": 393,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 360,
                            "end": 364,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          },
                          "right": {
                            "type": "YieldExpression",
                            "start": 367,
                            "end": 393,
                            "argument": {
                              "type": "Literal",
                              "start": 373,
                              "end": 393,
                              "raw": "\"What is your name?\"",
                              "value": "What is your name?"
                            },
                            "delegate": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 348,
                    "end": 353,
                    "argument": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 353,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 400,
                  "end": 444,
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 407,
                    "end": 444,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 438,
                        "end": 442,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 407,
                        "end": 438,
                        "tail": false,
                        "value": {
                          "cooked": "That's the end of the game, ",
                          "raw": "That's the end of the game, "
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 442,
                        "end": 444,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 449,
      "end": 635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 455,
          "end": 635,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 489,
            "decorators": [],
            "name": "asyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 467,
              "end": 489,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 469,
                "end": 489,
                "typeName": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 489,
                  "decorators": [],
                  "name": "AsyncSequenceFactory",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 492,
            "end": 635,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 510,
              "end": 635,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 514,
                  "end": 528,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 518,
                      "end": 527,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 522,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 525,
                        "end": 527,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "WhileStatement",
                  "start": 531,
                  "end": 586,
                  "body": {
                    "type": "BlockStatement",
                    "start": 543,
                    "end": 586,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 549,
                        "end": 582,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 549,
                          "end": 582,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 549,
                            "end": 553,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          },
                          "right": {
                            "type": "YieldExpression",
                            "start": 556,
                            "end": 582,
                            "argument": {
                              "type": "Literal",
                              "start": 562,
                              "end": 582,
                              "raw": "\"What is your name?\"",
                              "value": "What is your name?"
                            },
                            "delegate": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 537,
                    "end": 542,
                    "argument": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 542,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 589,
                  "end": 633,
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 596,
                    "end": 633,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 627,
                        "end": 631,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 596,
                        "end": 627,
                        "tail": false,
                        "value": {
                          "cooked": "That's the end of the game, ",
                          "raw": "That's the end of the game, "
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 631,
                        "end": 633,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 638,
      "end": 818,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 818,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 678,
            "decorators": [],
            "name": "looserSyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 661,
              "end": 678,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 663,
                "end": 678,
                "typeName": {
                  "type": "Identifier",
                  "start": 663,
                  "end": 678,
                  "decorators": [],
                  "name": "SequenceFactory",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 681,
            "end": 818,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 693,
              "end": 818,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 697,
                  "end": 711,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 701,
                      "end": 710,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 701,
                        "end": 705,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 708,
                        "end": 710,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "WhileStatement",
                  "start": 714,
                  "end": 769,
                  "body": {
                    "type": "BlockStatement",
                    "start": 726,
                    "end": 769,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 732,
                        "end": 765,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 732,
                          "end": 765,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 732,
                            "end": 736,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          },
                          "right": {
                            "type": "YieldExpression",
                            "start": 739,
                            "end": 765,
                            "argument": {
                              "type": "Literal",
                              "start": 745,
                              "end": 765,
                              "raw": "\"What is your name?\"",
                              "value": "What is your name?"
                            },
                            "delegate": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 720,
                    "end": 725,
                    "argument": {
                      "type": "Identifier",
                      "start": 721,
                      "end": 725,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 772,
                  "end": 816,
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 779,
                    "end": 816,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 810,
                        "end": 814,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 779,
                        "end": 810,
                        "tail": false,
                        "value": {
                          "cooked": "That's the end of the game, ",
                          "raw": "That's the end of the game, "
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 814,
                        "end": 816,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 1008,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 827,
          "end": 1008,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 827,
            "end": 862,
            "decorators": [],
            "name": "looserAsyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 845,
              "end": 862,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 847,
                "end": 862,
                "typeName": {
                  "type": "Identifier",
                  "start": 847,
                  "end": 862,
                  "decorators": [],
                  "name": "SequenceFactory",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 865,
            "end": 1008,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 883,
              "end": 1008,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 887,
                  "end": 901,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 891,
                      "end": 900,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 891,
                        "end": 895,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 898,
                        "end": 900,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "WhileStatement",
                  "start": 904,
                  "end": 959,
                  "body": {
                    "type": "BlockStatement",
                    "start": 916,
                    "end": 959,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 922,
                        "end": 955,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 922,
                          "end": 955,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 922,
                            "end": 926,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          },
                          "right": {
                            "type": "YieldExpression",
                            "start": 929,
                            "end": 955,
                            "argument": {
                              "type": "Literal",
                              "start": 935,
                              "end": 955,
                              "raw": "\"What is your name?\"",
                              "value": "What is your name?"
                            },
                            "delegate": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 910,
                    "end": 915,
                    "argument": {
                      "type": "Identifier",
                      "start": 911,
                      "end": 915,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 962,
                  "end": 1006,
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 969,
                    "end": 1006,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 1000,
                        "end": 1004,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 969,
                        "end": 1000,
                        "tail": false,
                        "value": {
                          "cooked": "That's the end of the game, ",
                          "raw": "That's the end of the game, "
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1004,
                        "end": 1006,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
