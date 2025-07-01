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
