__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
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
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "l0",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 23
            },
            "body": {
              "type": "ForStatement",
              "init": {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 39
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 42,
                      "end": 43
                    },
                    "definite": false,
                    "start": 38,
                    "end": 43
                  }
                ],
                "declare": false,
                "start": 34,
                "end": 43
              },
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 49,
                  "end": 50
                },
                "start": 45,
                "end": 50
              },
              "update": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "start": 52,
                "end": 55
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 69
                    },
                    "body": {
                      "type": "ForStatement",
                      "init": {
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
                              "start": 88,
                              "end": 89
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 92,
                              "end": 93
                            },
                            "definite": false,
                            "start": 88,
                            "end": 93
                          }
                        ],
                        "declare": false,
                        "start": 84,
                        "end": 93
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 96
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 99,
                          "end": 100
                        },
                        "start": 95,
                        "end": 100
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 105
                        },
                        "start": 102,
                        "end": 105
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "LabeledStatement",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ll1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 121,
                              "end": 124
                            },
                            "body": {
                              "type": "ForStatement",
                              "init": {
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
                                      "start": 147,
                                      "end": 148
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 151,
                                      "end": 152
                                    },
                                    "definite": false,
                                    "start": 147,
                                    "end": 152
                                  }
                                ],
                                "declare": false,
                                "start": 143,
                                "end": 152
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 154,
                                  "end": 155
                                },
                                "operator": "<",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 158,
                                  "end": 159
                                },
                                "start": 154,
                                "end": 159
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "prefix": true,
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 163,
                                  "end": 164
                                },
                                "start": 161,
                                "end": 164
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
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
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "x",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 205,
                                                "end": 206
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "y",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 209,
                                                "end": 210
                                              },
                                              "start": 205,
                                              "end": 210
                                            },
                                            "start": 198,
                                            "end": 210
                                          }
                                        ],
                                        "start": 196,
                                        "end": 212
                                      },
                                      "expression": false,
                                      "start": 185,
                                      "end": 212
                                    },
                                    "directive": null,
                                    "start": 184,
                                    "end": 214
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "body": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 238,
                                          "end": 239
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 242,
                                          "end": 243
                                        },
                                        "start": 238,
                                        "end": 243
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 232,
                                      "end": 243
                                    },
                                    "directive": null,
                                    "start": 231,
                                    "end": 245
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 266,
                                        "end": 267
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 271,
                                        "end": 272
                                      },
                                      "start": 266,
                                      "end": 272
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "label": null,
                                          "start": 296,
                                          "end": 302
                                        }
                                      ],
                                      "start": 274,
                                      "end": 320
                                    },
                                    "alternate": null,
                                    "start": 262,
                                    "end": 320
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 341,
                                        "end": 342
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 346,
                                        "end": 347
                                      },
                                      "start": 341,
                                      "end": 347
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "l1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 377,
                                            "end": 379
                                          },
                                          "start": 371,
                                          "end": 380
                                        }
                                      ],
                                      "start": 349,
                                      "end": 398
                                    },
                                    "alternate": null,
                                    "start": 337,
                                    "end": 398
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 419,
                                        "end": 420
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 424,
                                        "end": 425
                                      },
                                      "start": 419,
                                      "end": 425
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ll1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 455,
                                            "end": 458
                                          },
                                          "start": 449,
                                          "end": 459
                                        }
                                      ],
                                      "start": 427,
                                      "end": 477
                                    },
                                    "alternate": null,
                                    "start": 415,
                                    "end": 477
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 498,
                                        "end": 499
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 503,
                                        "end": 504
                                      },
                                      "start": 498,
                                      "end": 504
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "l0",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 537,
                                            "end": 539
                                          },
                                          "start": 528,
                                          "end": 540
                                        }
                                      ],
                                      "start": 506,
                                      "end": 558
                                    },
                                    "alternate": null,
                                    "start": 494,
                                    "end": 558
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 580,
                                        "end": 581
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 585,
                                        "end": 586
                                      },
                                      "start": 580,
                                      "end": 586
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "label": null,
                                          "start": 610,
                                          "end": 619
                                        }
                                      ],
                                      "start": 588,
                                      "end": 637
                                    },
                                    "alternate": null,
                                    "start": 576,
                                    "end": 637
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 658,
                                        "end": 659
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 663,
                                        "end": 664
                                      },
                                      "start": 658,
                                      "end": 664
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "l1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 697,
                                            "end": 699
                                          },
                                          "start": 688,
                                          "end": 700
                                        }
                                      ],
                                      "start": 666,
                                      "end": 718
                                    },
                                    "alternate": null,
                                    "start": 654,
                                    "end": 718
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 739,
                                        "end": 740
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 744,
                                        "end": 745
                                      },
                                      "start": 739,
                                      "end": 745
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ll1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 778,
                                            "end": 781
                                          },
                                          "start": 769,
                                          "end": 782
                                        }
                                      ],
                                      "start": 747,
                                      "end": 800
                                    },
                                    "alternate": null,
                                    "start": 735,
                                    "end": 800
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 821,
                                        "end": 822
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 826,
                                        "end": 827
                                      },
                                      "start": 821,
                                      "end": 827
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "Literal",
                                            "value": "123",
                                            "raw": "\"123\"",
                                            "start": 858,
                                            "end": 863
                                          },
                                          "start": 851,
                                          "end": 863
                                        }
                                      ],
                                      "start": 829,
                                      "end": 881
                                    },
                                    "alternate": null,
                                    "start": 817,
                                    "end": 881
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 902,
                                        "end": 903
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3",
                                        "start": 907,
                                        "end": 908
                                      },
                                      "start": 902,
                                      "end": 908
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": null,
                                          "start": 932,
                                          "end": 939
                                        }
                                      ],
                                      "start": 910,
                                      "end": 957
                                    },
                                    "alternate": null,
                                    "start": 898,
                                    "end": 957
                                  }
                                ],
                                "start": 166,
                                "end": 971
                              },
                              "start": 138,
                              "end": 971
                            },
                            "start": 121,
                            "end": 971
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 988,
                                "end": 989
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 993,
                                "end": 994
                              },
                              "start": 988,
                              "end": 994
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": null,
                                  "start": 1014,
                                  "end": 1020
                                }
                              ],
                              "start": 996,
                              "end": 1034
                            },
                            "alternate": null,
                            "start": 984,
                            "end": 1034
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1051,
                                "end": 1052
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1056,
                                "end": 1057
                              },
                              "start": 1051,
                              "end": 1057
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "l1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1083,
                                    "end": 1085
                                  },
                                  "start": 1077,
                                  "end": 1086
                                }
                              ],
                              "start": 1059,
                              "end": 1100
                            },
                            "alternate": null,
                            "start": 1047,
                            "end": 1100
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1117,
                                "end": 1118
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 1122,
                                "end": 1123
                              },
                              "start": 1117,
                              "end": 1123
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "label": null,
                                  "start": 1143,
                                  "end": 1152
                                }
                              ],
                              "start": 1125,
                              "end": 1166
                            },
                            "alternate": null,
                            "start": 1113,
                            "end": 1166
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1183,
                                "end": 1184
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 1188,
                                "end": 1189
                              },
                              "start": 1183,
                              "end": 1189
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "l1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1218,
                                    "end": 1220
                                  },
                                  "start": 1209,
                                  "end": 1221
                                }
                              ],
                              "start": 1191,
                              "end": 1235
                            },
                            "alternate": null,
                            "start": 1179,
                            "end": 1235
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1252,
                                "end": 1253
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 1257,
                                "end": 1258
                              },
                              "start": 1252,
                              "end": 1258
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "l0",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1287,
                                    "end": 1289
                                  },
                                  "start": 1278,
                                  "end": 1290
                                }
                              ],
                              "start": 1260,
                              "end": 1304
                            },
                            "alternate": null,
                            "start": 1248,
                            "end": 1304
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1321,
                                "end": 1322
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 1326,
                                "end": 1327
                              },
                              "start": 1321,
                              "end": 1327
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": "456",
                                    "raw": "\"456\"",
                                    "start": 1354,
                                    "end": 1359
                                  },
                                  "start": 1347,
                                  "end": 1360
                                }
                              ],
                              "start": 1329,
                              "end": 1374
                            },
                            "alternate": null,
                            "start": 1317,
                            "end": 1374
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1391,
                                "end": 1392
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 1396,
                                "end": 1397
                              },
                              "start": 1391,
                              "end": 1397
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 1417,
                                  "end": 1424
                                }
                              ],
                              "start": 1399,
                              "end": 1438
                            },
                            "alternate": null,
                            "start": 1387,
                            "end": 1438
                          }
                        ],
                        "start": 107,
                        "end": 1448
                      },
                      "start": 79,
                      "end": 1448
                    },
                    "start": 67,
                    "end": 1448
                  }
                ],
                "start": 57,
                "end": 1454
              },
              "start": 29,
              "end": 1454
            },
            "start": 21,
            "end": 1454
          }
        ],
        "start": 15,
        "end": 1456
      },
      "expression": false,
      "start": 0,
      "end": 1456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1467,
        "end": 1472
      },
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
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "l0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1481,
              "end": 1483
            },
            "body": {
              "type": "ForStatement",
              "init": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1500,
                      "end": 1501
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1504,
                      "end": 1505
                    },
                    "definite": false,
                    "start": 1500,
                    "end": 1505
                  }
                ],
                "declare": false,
                "start": 1494,
                "end": 1505
              },
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1507,
                  "end": 1508
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1511,
                  "end": 1512
                },
                "start": 1507,
                "end": 1512
              },
              "update": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1527
                    },
                    "body": {
                      "type": "ForStatement",
                      "init": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1548,
                              "end": 1549
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1552,
                              "end": 1553
                            },
                            "definite": false,
                            "start": 1548,
                            "end": 1553
                          }
                        ],
                        "declare": false,
                        "start": 1542,
                        "end": 1553
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1555,
                          "end": 1556
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1559,
                          "end": 1560
                        },
                        "start": 1555,
                        "end": 1560
                      },
                      "update": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "LabeledStatement",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ll1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1577,
                              "end": 1580
                            },
                            "body": {
                              "type": "ForStatement",
                              "init": {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1605,
                                      "end": 1606
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1609,
                                      "end": 1610
                                    },
                                    "definite": false,
                                    "start": 1605,
                                    "end": 1610
                                  }
                                ],
                                "declare": false,
                                "start": 1599,
                                "end": 1610
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1612,
                                  "end": 1613
                                },
                                "operator": "<",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 1616,
                                  "end": 1617
                                },
                                "start": 1612,
                                "end": 1617
                              },
                              "update": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
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
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "x",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1659,
                                                "end": 1660
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "y",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1663,
                                                "end": 1664
                                              },
                                              "start": 1659,
                                              "end": 1664
                                            },
                                            "start": 1652,
                                            "end": 1664
                                          }
                                        ],
                                        "start": 1650,
                                        "end": 1666
                                      },
                                      "expression": false,
                                      "start": 1639,
                                      "end": 1666
                                    },
                                    "directive": null,
                                    "start": 1638,
                                    "end": 1668
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "body": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1692,
                                          "end": 1693
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1696,
                                          "end": 1697
                                        },
                                        "start": 1692,
                                        "end": 1697
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 1686,
                                      "end": 1697
                                    },
                                    "directive": null,
                                    "start": 1685,
                                    "end": 1699
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1720,
                                        "end": 1721
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 1725,
                                        "end": 1726
                                      },
                                      "start": 1720,
                                      "end": 1726
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "label": null,
                                          "start": 1750,
                                          "end": 1756
                                        }
                                      ],
                                      "start": 1728,
                                      "end": 1774
                                    },
                                    "alternate": null,
                                    "start": 1716,
                                    "end": 1774
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1795,
                                        "end": 1796
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 1800,
                                        "end": 1801
                                      },
                                      "start": 1795,
                                      "end": 1801
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "l1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1831,
                                            "end": 1833
                                          },
                                          "start": 1825,
                                          "end": 1834
                                        }
                                      ],
                                      "start": 1803,
                                      "end": 1852
                                    },
                                    "alternate": null,
                                    "start": 1791,
                                    "end": 1852
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1873,
                                        "end": 1874
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 1878,
                                        "end": 1879
                                      },
                                      "start": 1873,
                                      "end": 1879
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ll1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1909,
                                            "end": 1912
                                          },
                                          "start": 1903,
                                          "end": 1913
                                        }
                                      ],
                                      "start": 1881,
                                      "end": 1931
                                    },
                                    "alternate": null,
                                    "start": 1869,
                                    "end": 1931
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1952,
                                        "end": 1953
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 1957,
                                        "end": 1958
                                      },
                                      "start": 1952,
                                      "end": 1958
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "l0",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1991,
                                            "end": 1993
                                          },
                                          "start": 1982,
                                          "end": 1994
                                        }
                                      ],
                                      "start": 1960,
                                      "end": 2012
                                    },
                                    "alternate": null,
                                    "start": 1948,
                                    "end": 2012
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2034,
                                        "end": 2035
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2039,
                                        "end": 2040
                                      },
                                      "start": 2034,
                                      "end": 2040
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "label": null,
                                          "start": 2064,
                                          "end": 2073
                                        }
                                      ],
                                      "start": 2042,
                                      "end": 2091
                                    },
                                    "alternate": null,
                                    "start": 2030,
                                    "end": 2091
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2112,
                                        "end": 2113
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2117,
                                        "end": 2118
                                      },
                                      "start": 2112,
                                      "end": 2118
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "l1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2151,
                                            "end": 2153
                                          },
                                          "start": 2142,
                                          "end": 2154
                                        }
                                      ],
                                      "start": 2120,
                                      "end": 2172
                                    },
                                    "alternate": null,
                                    "start": 2108,
                                    "end": 2172
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2193,
                                        "end": 2194
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2198,
                                        "end": 2199
                                      },
                                      "start": 2193,
                                      "end": 2199
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ll1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2232,
                                            "end": 2235
                                          },
                                          "start": 2223,
                                          "end": 2236
                                        }
                                      ],
                                      "start": 2201,
                                      "end": 2254
                                    },
                                    "alternate": null,
                                    "start": 2189,
                                    "end": 2254
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2275,
                                        "end": 2276
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2",
                                        "start": 2280,
                                        "end": 2281
                                      },
                                      "start": 2275,
                                      "end": 2281
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "Literal",
                                            "value": "123",
                                            "raw": "\"123\"",
                                            "start": 2312,
                                            "end": 2317
                                          },
                                          "start": 2305,
                                          "end": 2317
                                        }
                                      ],
                                      "start": 2283,
                                      "end": 2335
                                    },
                                    "alternate": null,
                                    "start": 2271,
                                    "end": 2335
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2356,
                                        "end": 2357
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3",
                                        "start": 2361,
                                        "end": 2362
                                      },
                                      "start": 2356,
                                      "end": 2362
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": null,
                                          "start": 2386,
                                          "end": 2393
                                        }
                                      ],
                                      "start": 2364,
                                      "end": 2411
                                    },
                                    "alternate": null,
                                    "start": 2352,
                                    "end": 2411
                                  }
                                ],
                                "start": 1620,
                                "end": 2425
                              },
                              "start": 1594,
                              "end": 2425
                            },
                            "start": 1577,
                            "end": 2425
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2442,
                                "end": 2443
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2447,
                                "end": 2448
                              },
                              "start": 2442,
                              "end": 2448
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": null,
                                  "start": 2468,
                                  "end": 2474
                                }
                              ],
                              "start": 2450,
                              "end": 2488
                            },
                            "alternate": null,
                            "start": 2438,
                            "end": 2488
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2505,
                                "end": 2506
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2510,
                                "end": 2511
                              },
                              "start": 2505,
                              "end": 2511
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "l1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2537,
                                    "end": 2539
                                  },
                                  "start": 2531,
                                  "end": 2540
                                }
                              ],
                              "start": 2513,
                              "end": 2554
                            },
                            "alternate": null,
                            "start": 2501,
                            "end": 2554
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2571,
                                "end": 2572
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 2576,
                                "end": 2577
                              },
                              "start": 2571,
                              "end": 2577
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "label": null,
                                  "start": 2597,
                                  "end": 2606
                                }
                              ],
                              "start": 2579,
                              "end": 2620
                            },
                            "alternate": null,
                            "start": 2567,
                            "end": 2620
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2637,
                                "end": 2638
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 2642,
                                "end": 2643
                              },
                              "start": 2637,
                              "end": 2643
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "l1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2672,
                                    "end": 2674
                                  },
                                  "start": 2663,
                                  "end": 2675
                                }
                              ],
                              "start": 2645,
                              "end": 2689
                            },
                            "alternate": null,
                            "start": 2633,
                            "end": 2689
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2706,
                                "end": 2707
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 2711,
                                "end": 2712
                              },
                              "start": 2706,
                              "end": 2712
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "l0",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2741,
                                    "end": 2743
                                  },
                                  "start": 2732,
                                  "end": 2744
                                }
                              ],
                              "start": 2714,
                              "end": 2758
                            },
                            "alternate": null,
                            "start": 2702,
                            "end": 2758
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2775,
                                "end": 2776
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 2780,
                                "end": 2781
                              },
                              "start": 2775,
                              "end": 2781
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": "456",
                                    "raw": "\"456\"",
                                    "start": 2808,
                                    "end": 2813
                                  },
                                  "start": 2801,
                                  "end": 2814
                                }
                              ],
                              "start": 2783,
                              "end": 2828
                            },
                            "alternate": null,
                            "start": 2771,
                            "end": 2828
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2845,
                                "end": 2846
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 2850,
                                "end": 2851
                              },
                              "start": 2845,
                              "end": 2851
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 2871,
                                  "end": 2878
                                }
                              ],
                              "start": 2853,
                              "end": 2892
                            },
                            "alternate": null,
                            "start": 2841,
                            "end": 2892
                          }
                        ],
                        "start": 1563,
                        "end": 2902
                      },
                      "start": 1537,
                      "end": 2902
                    },
                    "start": 1525,
                    "end": 2902
                  }
                ],
                "start": 1515,
                "end": 2908
              },
              "start": 1489,
              "end": 2908
            },
            "start": 1481,
            "end": 2908
          }
        ],
        "start": 1475,
        "end": 2910
      },
      "expression": false,
      "start": 1458,
      "end": 2910
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2910
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 21,
    "end": 23,
    "range": [
      21,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 34,
    "end": 37,
    "range": [
      34,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 52,
    "end": 54,
    "range": [
      52,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 84,
    "end": 87,
    "range": [
      84,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 102,
    "end": 104,
    "range": [
      102,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "ll1",
    "start": 121,
    "end": 124,
    "range": [
      121,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 185,
    "end": 193,
    "range": [
      185,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 198,
    "end": 204,
    "range": [
      198,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 235,
    "end": 237,
    "range": [
      235,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 262,
    "end": 264,
    "range": [
      262,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 268,
    "end": 270,
    "range": [
      268,
      270
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 296,
    "end": 301,
    "range": [
      296,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 337,
    "end": 339,
    "range": [
      337,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 343,
    "end": 345,
    "range": [
      343,
      345
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 371,
    "end": 376,
    "range": [
      371,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 377,
    "end": 379,
    "range": [
      377,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 415,
    "end": 417,
    "range": [
      415,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 421,
    "end": 423,
    "range": [
      421,
      423
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 449,
    "end": 454,
    "range": [
      449,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "ll1",
    "start": 455,
    "end": 458,
    "range": [
      455,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 494,
    "end": 496,
    "range": [
      494,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 500,
    "end": 502,
    "range": [
      500,
      502
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 528,
    "end": 536,
    "range": [
      528,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 537,
    "end": 539,
    "range": [
      537,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 576,
    "end": 578,
    "range": [
      576,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 582,
    "end": 584,
    "range": [
      582,
      584
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 610,
    "end": 618,
    "range": [
      610,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 654,
    "end": 656,
    "range": [
      654,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 660,
    "end": 662,
    "range": [
      660,
      662
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 688,
    "end": 696,
    "range": [
      688,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 697,
    "end": 699,
    "range": [
      697,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 735,
    "end": 737,
    "range": [
      735,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 741,
    "end": 743,
    "range": [
      741,
      743
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 769,
    "end": 777,
    "range": [
      769,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "ll1",
    "start": 778,
    "end": 781,
    "range": [
      778,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 817,
    "end": 819,
    "range": [
      817,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 823,
    "end": 825,
    "range": [
      823,
      825
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 851,
    "end": 857,
    "range": [
      851,
      857
    ]
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 858,
    "end": 863,
    "range": [
      858,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 898,
    "end": 900,
    "range": [
      898,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 904,
    "end": 906,
    "range": [
      904,
      906
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 932,
    "end": 938,
    "range": [
      932,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 984,
    "end": 986,
    "range": [
      984,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 990,
    "end": 992,
    "range": [
      990,
      992
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1014,
    "end": 1019,
    "range": [
      1014,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1047,
    "end": 1049,
    "range": [
      1047,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1053,
    "end": 1055,
    "range": [
      1053,
      1055
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1077,
    "end": 1082,
    "range": [
      1077,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 1083,
    "end": 1085,
    "range": [
      1083,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1113,
    "end": 1115,
    "range": [
      1113,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1119,
    "end": 1121,
    "range": [
      1119,
      1121
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1143,
    "end": 1151,
    "range": [
      1143,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1179,
    "end": 1181,
    "range": [
      1179,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1209,
    "end": 1217,
    "range": [
      1209,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 1218,
    "end": 1220,
    "range": [
      1218,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1248,
    "end": 1250,
    "range": [
      1248,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1254,
    "end": 1256,
    "range": [
      1254,
      1256
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1278,
    "end": 1286,
    "range": [
      1278,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 1287,
    "end": 1289,
    "range": [
      1287,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1317,
    "end": 1319,
    "range": [
      1317,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1323,
    "end": 1325,
    "range": [
      1323,
      1325
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1347,
    "end": 1353,
    "range": [
      1347,
      1353
    ]
  },
  {
    "type": "String",
    "value": "\"456\"",
    "start": 1354,
    "end": 1359,
    "range": [
      1354,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1387,
    "end": 1389,
    "range": [
      1387,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1393,
    "end": 1395,
    "range": [
      1393,
      1395
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1417,
    "end": 1423,
    "range": [
      1417,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1458,
    "end": 1466,
    "range": [
      1458,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "foo_c",
    "start": 1467,
    "end": 1472,
    "range": [
      1467,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 1481,
    "end": 1483,
    "range": [
      1481,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1489,
    "end": 1492,
    "range": [
      1489,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1494,
    "end": 1499,
    "range": [
      1494,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 1525,
    "end": 1527,
    "range": [
      1525,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1537,
    "end": 1540,
    "range": [
      1537,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1542,
    "end": 1547,
    "range": [
      1542,
      1547
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "ll1",
    "start": 1577,
    "end": 1580,
    "range": [
      1577,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1594,
    "end": 1597,
    "range": [
      1594,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1599,
    "end": 1604,
    "range": [
      1599,
      1604
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1639,
    "end": 1647,
    "range": [
      1639,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1652,
    "end": 1658,
    "range": [
      1652,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1689,
    "end": 1691,
    "range": [
      1689,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1716,
    "end": 1718,
    "range": [
      1716,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1722,
    "end": 1724,
    "range": [
      1722,
      1724
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1750,
    "end": 1755,
    "range": [
      1750,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1791,
    "end": 1793,
    "range": [
      1791,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1797,
    "end": 1799,
    "range": [
      1797,
      1799
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1825,
    "end": 1830,
    "range": [
      1825,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 1831,
    "end": 1833,
    "range": [
      1831,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1869,
    "end": 1871,
    "range": [
      1869,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1875,
    "end": 1877,
    "range": [
      1875,
      1877
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1903,
    "end": 1908,
    "range": [
      1903,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "ll1",
    "start": 1909,
    "end": 1912,
    "range": [
      1909,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1948,
    "end": 1950,
    "range": [
      1948,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1954,
    "end": 1956,
    "range": [
      1954,
      1956
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1982,
    "end": 1990,
    "range": [
      1982,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 1991,
    "end": 1993,
    "range": [
      1991,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2030,
    "end": 2032,
    "range": [
      2030,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2036,
    "end": 2038,
    "range": [
      2036,
      2038
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2064,
    "end": 2072,
    "range": [
      2064,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2108,
    "end": 2110,
    "range": [
      2108,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2114,
    "end": 2116,
    "range": [
      2114,
      2116
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2142,
    "end": 2150,
    "range": [
      2142,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 2151,
    "end": 2153,
    "range": [
      2151,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2189,
    "end": 2191,
    "range": [
      2189,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2195,
    "end": 2197,
    "range": [
      2195,
      2197
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2223,
    "end": 2231,
    "range": [
      2223,
      2231
    ]
  },
  {
    "type": "Identifier",
    "value": "ll1",
    "start": 2232,
    "end": 2235,
    "range": [
      2232,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2271,
    "end": 2273,
    "range": [
      2271,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2277,
    "end": 2279,
    "range": [
      2277,
      2279
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2305,
    "end": 2311,
    "range": [
      2305,
      2311
    ]
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 2312,
    "end": 2317,
    "range": [
      2312,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2352,
    "end": 2354,
    "range": [
      2352,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2358,
    "end": 2360,
    "range": [
      2358,
      2360
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2361,
    "end": 2362,
    "range": [
      2361,
      2362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2362,
    "end": 2363,
    "range": [
      2362,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2386,
    "end": 2392,
    "range": [
      2386,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2438,
    "end": 2440,
    "range": [
      2438,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2444,
    "end": 2446,
    "range": [
      2444,
      2446
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2468,
    "end": 2473,
    "range": [
      2468,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2501,
    "end": 2503,
    "range": [
      2501,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2507,
    "end": 2509,
    "range": [
      2507,
      2509
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2531,
    "end": 2536,
    "range": [
      2531,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 2537,
    "end": 2539,
    "range": [
      2537,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2553,
    "end": 2554,
    "range": [
      2553,
      2554
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2567,
    "end": 2569,
    "range": [
      2567,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2573,
    "end": 2575,
    "range": [
      2573,
      2575
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2597,
    "end": 2605,
    "range": [
      2597,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2605,
    "end": 2606,
    "range": [
      2605,
      2606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2633,
    "end": 2635,
    "range": [
      2633,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2636,
    "end": 2637,
    "range": [
      2636,
      2637
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2639,
    "end": 2641,
    "range": [
      2639,
      2641
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2663,
    "end": 2671,
    "range": [
      2663,
      2671
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 2672,
    "end": 2674,
    "range": [
      2672,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2702,
    "end": 2704,
    "range": [
      2702,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2708,
    "end": 2710,
    "range": [
      2708,
      2710
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2732,
    "end": 2740,
    "range": [
      2732,
      2740
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 2741,
    "end": 2743,
    "range": [
      2741,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2771,
    "end": 2773,
    "range": [
      2771,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2777,
    "end": 2779,
    "range": [
      2777,
      2779
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2781,
    "end": 2782,
    "range": [
      2781,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2801,
    "end": 2807,
    "range": [
      2801,
      2807
    ]
  },
  {
    "type": "String",
    "value": "\"456\"",
    "start": 2808,
    "end": 2813,
    "range": [
      2808,
      2813
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2841,
    "end": 2843,
    "range": [
      2841,
      2843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2847,
    "end": 2849,
    "range": [
      2847,
      2849
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2853,
    "end": 2854,
    "range": [
      2853,
      2854
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2871,
    "end": 2877,
    "range": [
      2871,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  }
]
```
