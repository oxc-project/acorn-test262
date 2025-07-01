__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyncSequenceFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 99
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
              ],
              "start": 99,
              "end": 123
            },
            "start": 90,
            "end": 123
          },
          "start": 87,
          "end": 123
        },
        "start": 84,
        "end": 123
      },
      "declare": false,
      "start": 57,
      "end": 124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncSequenceFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 151
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 174
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
              ],
              "start": 174,
              "end": 198
            },
            "start": 160,
            "end": 198
          },
          "start": 157,
          "end": 198
        },
        "start": 154,
        "end": 198
      },
      "declare": false,
      "start": 126,
      "end": 199
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SequenceFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 221
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SyncSequenceFactory",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 243
            },
            "typeArguments": null,
            "start": 224,
            "end": 243
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncSequenceFactory",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 266
            },
            "typeArguments": null,
            "start": 246,
            "end": 266
          }
        ],
        "start": 224,
        "end": 266
      },
      "declare": false,
      "start": 201,
      "end": 266
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "syncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SyncSequenceFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 306
                },
                "typeArguments": null,
                "start": 287,
                "end": 306
              },
              "start": 285,
              "end": 306
            },
            "start": 274,
            "end": 306
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 333
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 336,
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
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 353
                    },
                    "prefix": true,
                    "start": 348,
                    "end": 353
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 360,
                            "end": 364
                          },
                          "right": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": "What is your name?",
                              "raw": "\"What is your name?\"",
                              "start": 373,
                              "end": 393
                            },
                            "start": 367,
                            "end": 393
                          },
                          "start": 360,
                          "end": 393
                        },
                        "directive": null,
                        "start": 360,
                        "end": 393
                      }
                    ],
                    "start": 354,
                    "end": 397
                  },
                  "start": 342,
                  "end": 397
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "That's the end of the game, ",
                          "cooked": "That's the end of the game, "
                        },
                        "tail": false,
                        "start": 407,
                        "end": 438
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 442,
                        "end": 444
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 438,
                        "end": 442
                      }
                    ],
                    "start": 407,
                    "end": 444
                  },
                  "start": 400,
                  "end": 444
                }
              ],
              "start": 321,
              "end": 446
            },
            "expression": false,
            "start": 309,
            "end": 446
          },
          "definite": false,
          "start": 274,
          "end": 446
        }
      ],
      "declare": false,
      "start": 268,
      "end": 446
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncSequenceFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 489
                },
                "typeArguments": null,
                "start": 469,
                "end": 489
              },
              "start": 467,
              "end": 489
            },
            "start": 455,
            "end": 489
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 522
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 525,
                        "end": 527
                      },
                      "definite": false,
                      "start": 518,
                      "end": 527
                    }
                  ],
                  "declare": false,
                  "start": 514,
                  "end": 528
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 542
                    },
                    "prefix": true,
                    "start": 537,
                    "end": 542
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 549,
                            "end": 553
                          },
                          "right": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": "What is your name?",
                              "raw": "\"What is your name?\"",
                              "start": 562,
                              "end": 582
                            },
                            "start": 556,
                            "end": 582
                          },
                          "start": 549,
                          "end": 582
                        },
                        "directive": null,
                        "start": 549,
                        "end": 582
                      }
                    ],
                    "start": 543,
                    "end": 586
                  },
                  "start": 531,
                  "end": 586
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "That's the end of the game, ",
                          "cooked": "That's the end of the game, "
                        },
                        "tail": false,
                        "start": 596,
                        "end": 627
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 631,
                        "end": 633
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 627,
                        "end": 631
                      }
                    ],
                    "start": 596,
                    "end": 633
                  },
                  "start": 589,
                  "end": 633
                }
              ],
              "start": 510,
              "end": 635
            },
            "expression": false,
            "start": 492,
            "end": 635
          },
          "definite": false,
          "start": 455,
          "end": 635
        }
      ],
      "declare": false,
      "start": 449,
      "end": 635
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "looserSyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SequenceFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 678
                },
                "typeArguments": null,
                "start": 663,
                "end": 678
              },
              "start": 661,
              "end": 678
            },
            "start": 644,
            "end": 678
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 701,
                        "end": 705
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 708,
                        "end": 710
                      },
                      "definite": false,
                      "start": 701,
                      "end": 710
                    }
                  ],
                  "declare": false,
                  "start": 697,
                  "end": 711
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 725
                    },
                    "prefix": true,
                    "start": 720,
                    "end": 725
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 732,
                            "end": 736
                          },
                          "right": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": "What is your name?",
                              "raw": "\"What is your name?\"",
                              "start": 745,
                              "end": 765
                            },
                            "start": 739,
                            "end": 765
                          },
                          "start": 732,
                          "end": 765
                        },
                        "directive": null,
                        "start": 732,
                        "end": 765
                      }
                    ],
                    "start": 726,
                    "end": 769
                  },
                  "start": 714,
                  "end": 769
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "That's the end of the game, ",
                          "cooked": "That's the end of the game, "
                        },
                        "tail": false,
                        "start": 779,
                        "end": 810
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 814,
                        "end": 816
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 814
                      }
                    ],
                    "start": 779,
                    "end": 816
                  },
                  "start": 772,
                  "end": 816
                }
              ],
              "start": 693,
              "end": 818
            },
            "expression": false,
            "start": 681,
            "end": 818
          },
          "definite": false,
          "start": 644,
          "end": 818
        }
      ],
      "declare": false,
      "start": 638,
      "end": 818
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "looserAsyncFactory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SequenceFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 847,
                  "end": 862
                },
                "typeArguments": null,
                "start": 847,
                "end": 862
              },
              "start": 845,
              "end": 862
            },
            "start": 827,
            "end": 862
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 891,
                        "end": 895
                      },
                      "init": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 898,
                        "end": 900
                      },
                      "definite": false,
                      "start": 891,
                      "end": 900
                    }
                  ],
                  "declare": false,
                  "start": 887,
                  "end": 901
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 911,
                      "end": 915
                    },
                    "prefix": true,
                    "start": 910,
                    "end": 915
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 922,
                            "end": 926
                          },
                          "right": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": "What is your name?",
                              "raw": "\"What is your name?\"",
                              "start": 935,
                              "end": 955
                            },
                            "start": 929,
                            "end": 955
                          },
                          "start": 922,
                          "end": 955
                        },
                        "directive": null,
                        "start": 922,
                        "end": 955
                      }
                    ],
                    "start": 916,
                    "end": 959
                  },
                  "start": 904,
                  "end": 959
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "That's the end of the game, ",
                          "cooked": "That's the end of the game, "
                        },
                        "tail": false,
                        "start": 969,
                        "end": 1000
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1004,
                        "end": 1006
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1000,
                        "end": 1004
                      }
                    ],
                    "start": 969,
                    "end": 1006
                  },
                  "start": 962,
                  "end": 1006
                }
              ],
              "start": 883,
              "end": 1008
            },
            "expression": false,
            "start": 865,
            "end": 1008
          },
          "definite": false,
          "start": 827,
          "end": 1008
        }
      ],
      "declare": false,
      "start": 821,
      "end": 1008
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1009
}
```
