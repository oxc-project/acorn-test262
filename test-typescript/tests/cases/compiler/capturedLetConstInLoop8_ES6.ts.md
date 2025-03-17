__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2911,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 1456,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 1456,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 21,
            "end": 1454,
            "body": {
              "type": "ForStatement",
              "start": 29,
              "end": 1454,
              "init": {
                "type": "VariableDeclaration",
                "start": 34,
                "end": 43,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 38,
                    "end": 43,
                    "id": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 42,
                      "end": 43,
                      "value": 0,
                      "raw": "0"
                    },
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 45,
                "end": 50,
                "left": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "start": 49,
                  "end": 50,
                  "value": 1,
                  "raw": "1"
                }
              },
              "update": {
                "type": "UpdateExpression",
                "start": 52,
                "end": 55,
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 1454,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 67,
                    "end": 1448,
                    "body": {
                      "type": "ForStatement",
                      "start": 79,
                      "end": 1448,
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 84,
                        "end": 93,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 88,
                            "end": 93,
                            "id": {
                              "type": "Identifier",
                              "start": 88,
                              "end": 89,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 92,
                              "end": 93,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 95,
                        "end": 100,
                        "left": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "start": 99,
                          "end": 100,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 102,
                        "end": 105,
                        "operator": "++",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 105,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 107,
                        "end": 1448,
                        "body": [
                          {
                            "type": "LabeledStatement",
                            "start": 121,
                            "end": 971,
                            "body": {
                              "type": "ForStatement",
                              "start": 138,
                              "end": 971,
                              "init": {
                                "type": "VariableDeclaration",
                                "start": 143,
                                "end": 152,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 147,
                                    "end": 152,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 147,
                                      "end": 148,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 151,
                                      "end": 152,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "let",
                                "declare": false
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 154,
                                "end": 159,
                                "left": {
                                  "type": "Identifier",
                                  "start": 154,
                                  "end": 155,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "operator": "<",
                                "right": {
                                  "type": "Literal",
                                  "start": 158,
                                  "end": 159,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "start": 161,
                                "end": 164,
                                "operator": "++",
                                "prefix": true,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 163,
                                  "end": 164,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 166,
                                "end": 971,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 184,
                                    "end": 214,
                                    "expression": {
                                      "type": "FunctionExpression",
                                      "start": 185,
                                      "end": 212,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 196,
                                        "end": 212,
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "start": 198,
                                            "end": 210,
                                            "argument": {
                                              "type": "BinaryExpression",
                                              "start": 205,
                                              "end": 210,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 205,
                                                "end": 206,
                                                "name": "x",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Identifier",
                                                "start": 209,
                                                "end": 210,
                                                "name": "y",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "declare": false,
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 231,
                                    "end": 245,
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 232,
                                      "end": 243,
                                      "id": null,
                                      "expression": true,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BinaryExpression",
                                        "start": 238,
                                        "end": 243,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 238,
                                          "end": 239,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "Identifier",
                                          "start": 242,
                                          "end": 243,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 262,
                                    "end": 320,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 266,
                                      "end": 272,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 266,
                                        "end": 267,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 271,
                                        "end": 272,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 274,
                                      "end": 320,
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "start": 296,
                                          "end": 302,
                                          "label": null
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 337,
                                    "end": 398,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 341,
                                      "end": 347,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 341,
                                        "end": 342,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 346,
                                        "end": 347,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 349,
                                      "end": 398,
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "start": 371,
                                          "end": 380,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 377,
                                            "end": 379,
                                            "name": "l1",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 415,
                                    "end": 477,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 419,
                                      "end": 425,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 419,
                                        "end": 420,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 424,
                                        "end": 425,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 427,
                                      "end": 477,
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "start": 449,
                                          "end": 459,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 455,
                                            "end": 458,
                                            "name": "ll1",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 494,
                                    "end": 558,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 498,
                                      "end": 504,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 498,
                                        "end": 499,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 503,
                                        "end": 504,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 506,
                                      "end": 558,
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "start": 528,
                                          "end": 540,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 537,
                                            "end": 539,
                                            "name": "l0",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 576,
                                    "end": 637,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 580,
                                      "end": 586,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 580,
                                        "end": 581,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 585,
                                        "end": 586,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 588,
                                      "end": 637,
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "start": 610,
                                          "end": 619,
                                          "label": null
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 654,
                                    "end": 718,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 658,
                                      "end": 664,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 658,
                                        "end": 659,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 663,
                                        "end": 664,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 666,
                                      "end": 718,
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "start": 688,
                                          "end": 700,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 697,
                                            "end": 699,
                                            "name": "l1",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 735,
                                    "end": 800,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 739,
                                      "end": 745,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 739,
                                        "end": 740,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 744,
                                        "end": 745,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 747,
                                      "end": 800,
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "start": 769,
                                          "end": 782,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 778,
                                            "end": 781,
                                            "name": "ll1",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 817,
                                    "end": 881,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 821,
                                      "end": 827,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 821,
                                        "end": 822,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 826,
                                        "end": 827,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 829,
                                      "end": 881,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 851,
                                          "end": 863,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 858,
                                            "end": 863,
                                            "value": "123",
                                            "raw": "\"123\""
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 898,
                                    "end": 957,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 902,
                                      "end": 908,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 902,
                                        "end": 903,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 907,
                                        "end": 908,
                                        "value": 3,
                                        "raw": "3"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 910,
                                      "end": 957,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 932,
                                          "end": 939,
                                          "argument": null
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  }
                                ]
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 124,
                              "name": "ll1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          {
                            "type": "IfStatement",
                            "start": 984,
                            "end": 1034,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 988,
                              "end": 994,
                              "left": {
                                "type": "Identifier",
                                "start": 988,
                                "end": 989,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 993,
                                "end": 994,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 996,
                              "end": 1034,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 1014,
                                  "end": 1020,
                                  "label": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1047,
                            "end": 1100,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1051,
                              "end": 1057,
                              "left": {
                                "type": "Identifier",
                                "start": 1051,
                                "end": 1052,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 1056,
                                "end": 1057,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1059,
                              "end": 1100,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 1077,
                                  "end": 1086,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 1083,
                                    "end": 1085,
                                    "name": "l1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1113,
                            "end": 1166,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1117,
                              "end": 1123,
                              "left": {
                                "type": "Identifier",
                                "start": 1117,
                                "end": 1118,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 1122,
                                "end": 1123,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1125,
                              "end": 1166,
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "start": 1143,
                                  "end": 1152,
                                  "label": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1179,
                            "end": 1235,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1183,
                              "end": 1189,
                              "left": {
                                "type": "Identifier",
                                "start": 1183,
                                "end": 1184,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 1188,
                                "end": 1189,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1191,
                              "end": 1235,
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "start": 1209,
                                  "end": 1221,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 1218,
                                    "end": 1220,
                                    "name": "l1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1248,
                            "end": 1304,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1252,
                              "end": 1258,
                              "left": {
                                "type": "Identifier",
                                "start": 1252,
                                "end": 1253,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 1257,
                                "end": 1258,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1260,
                              "end": 1304,
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "start": 1278,
                                  "end": 1290,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 1287,
                                    "end": 1289,
                                    "name": "l0",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1317,
                            "end": 1374,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1321,
                              "end": 1327,
                              "left": {
                                "type": "Identifier",
                                "start": 1321,
                                "end": 1322,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 1326,
                                "end": 1327,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1329,
                              "end": 1374,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1347,
                                  "end": 1360,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1354,
                                    "end": 1359,
                                    "value": "456",
                                    "raw": "\"456\""
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1387,
                            "end": 1438,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1391,
                              "end": 1397,
                              "left": {
                                "type": "Identifier",
                                "start": 1391,
                                "end": 1392,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 1396,
                                "end": 1397,
                                "value": 3,
                                "raw": "3"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1399,
                              "end": 1438,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1417,
                                  "end": 1424,
                                  "argument": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 69,
                      "name": "l1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "label": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "name": "l0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1458,
      "end": 2910,
      "id": {
        "type": "Identifier",
        "start": 1467,
        "end": 1472,
        "name": "foo_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1475,
        "end": 2910,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1481,
            "end": 2908,
            "body": {
              "type": "ForStatement",
              "start": 1489,
              "end": 2908,
              "init": {
                "type": "VariableDeclaration",
                "start": 1494,
                "end": 1505,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1500,
                    "end": 1505,
                    "id": {
                      "type": "Identifier",
                      "start": 1500,
                      "end": 1501,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1504,
                      "end": 1505,
                      "value": 0,
                      "raw": "0"
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1507,
                "end": 1512,
                "left": {
                  "type": "Identifier",
                  "start": 1507,
                  "end": 1508,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "start": 1511,
                  "end": 1512,
                  "value": 1,
                  "raw": "1"
                }
              },
              "update": null,
              "body": {
                "type": "BlockStatement",
                "start": 1515,
                "end": 2908,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 1525,
                    "end": 2902,
                    "body": {
                      "type": "ForStatement",
                      "start": 1537,
                      "end": 2902,
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 1542,
                        "end": 1553,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1548,
                            "end": 1553,
                            "id": {
                              "type": "Identifier",
                              "start": 1548,
                              "end": 1549,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1552,
                              "end": 1553,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 1555,
                        "end": 1560,
                        "left": {
                          "type": "Identifier",
                          "start": 1555,
                          "end": 1556,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "start": 1559,
                          "end": 1560,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "update": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1563,
                        "end": 2902,
                        "body": [
                          {
                            "type": "LabeledStatement",
                            "start": 1577,
                            "end": 2425,
                            "body": {
                              "type": "ForStatement",
                              "start": 1594,
                              "end": 2425,
                              "init": {
                                "type": "VariableDeclaration",
                                "start": 1599,
                                "end": 1610,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 1605,
                                    "end": 1610,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1605,
                                      "end": 1606,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 1609,
                                      "end": 1610,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "const",
                                "declare": false
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 1612,
                                "end": 1617,
                                "left": {
                                  "type": "Identifier",
                                  "start": 1612,
                                  "end": 1613,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "operator": "<",
                                "right": {
                                  "type": "Literal",
                                  "start": 1616,
                                  "end": 1617,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "update": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 1620,
                                "end": 2425,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1638,
                                    "end": 1668,
                                    "expression": {
                                      "type": "FunctionExpression",
                                      "start": 1639,
                                      "end": 1666,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 1650,
                                        "end": 1666,
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "start": 1652,
                                            "end": 1664,
                                            "argument": {
                                              "type": "BinaryExpression",
                                              "start": 1659,
                                              "end": 1664,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 1659,
                                                "end": 1660,
                                                "name": "x",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Identifier",
                                                "start": 1663,
                                                "end": 1664,
                                                "name": "y",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "declare": false,
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1685,
                                    "end": 1699,
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 1686,
                                      "end": 1697,
                                      "id": null,
                                      "expression": true,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BinaryExpression",
                                        "start": 1692,
                                        "end": 1697,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 1692,
                                          "end": 1693,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1696,
                                          "end": 1697,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 1716,
                                    "end": 1774,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 1720,
                                      "end": 1726,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1720,
                                        "end": 1721,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1725,
                                        "end": 1726,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 1728,
                                      "end": 1774,
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "start": 1750,
                                          "end": 1756,
                                          "label": null
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 1791,
                                    "end": 1852,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 1795,
                                      "end": 1801,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1795,
                                        "end": 1796,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1800,
                                        "end": 1801,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 1803,
                                      "end": 1852,
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "start": 1825,
                                          "end": 1834,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 1831,
                                            "end": 1833,
                                            "name": "l1",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 1869,
                                    "end": 1931,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 1873,
                                      "end": 1879,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1873,
                                        "end": 1874,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1878,
                                        "end": 1879,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 1881,
                                      "end": 1931,
                                      "body": [
                                        {
                                          "type": "BreakStatement",
                                          "start": 1903,
                                          "end": 1913,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 1909,
                                            "end": 1912,
                                            "name": "ll1",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 1948,
                                    "end": 2012,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 1952,
                                      "end": 1958,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1952,
                                        "end": 1953,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1957,
                                        "end": 1958,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 1960,
                                      "end": 2012,
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "start": 1982,
                                          "end": 1994,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 1991,
                                            "end": 1993,
                                            "name": "l0",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 2030,
                                    "end": 2091,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 2034,
                                      "end": 2040,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2034,
                                        "end": 2035,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 2039,
                                        "end": 2040,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 2042,
                                      "end": 2091,
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "start": 2064,
                                          "end": 2073,
                                          "label": null
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 2108,
                                    "end": 2172,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 2112,
                                      "end": 2118,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2112,
                                        "end": 2113,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 2117,
                                        "end": 2118,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 2120,
                                      "end": 2172,
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "start": 2142,
                                          "end": 2154,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 2151,
                                            "end": 2153,
                                            "name": "l1",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 2189,
                                    "end": 2254,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 2193,
                                      "end": 2199,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2193,
                                        "end": 2194,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 2198,
                                        "end": 2199,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 2201,
                                      "end": 2254,
                                      "body": [
                                        {
                                          "type": "ContinueStatement",
                                          "start": 2223,
                                          "end": 2236,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 2232,
                                            "end": 2235,
                                            "name": "ll1",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 2271,
                                    "end": 2335,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 2275,
                                      "end": 2281,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2275,
                                        "end": 2276,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 2280,
                                        "end": 2281,
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 2283,
                                      "end": 2335,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 2305,
                                          "end": 2317,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 2312,
                                            "end": 2317,
                                            "value": "123",
                                            "raw": "\"123\""
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 2352,
                                    "end": 2411,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 2356,
                                      "end": 2362,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2356,
                                        "end": 2357,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 2361,
                                        "end": 2362,
                                        "value": 3,
                                        "raw": "3"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 2364,
                                      "end": 2411,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 2386,
                                          "end": 2393,
                                          "argument": null
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  }
                                ]
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 1577,
                              "end": 1580,
                              "name": "ll1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          {
                            "type": "IfStatement",
                            "start": 2438,
                            "end": 2488,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2442,
                              "end": 2448,
                              "left": {
                                "type": "Identifier",
                                "start": 2442,
                                "end": 2443,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 2447,
                                "end": 2448,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2450,
                              "end": 2488,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 2468,
                                  "end": 2474,
                                  "label": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2501,
                            "end": 2554,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2505,
                              "end": 2511,
                              "left": {
                                "type": "Identifier",
                                "start": 2505,
                                "end": 2506,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 2510,
                                "end": 2511,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2513,
                              "end": 2554,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 2531,
                                  "end": 2540,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 2537,
                                    "end": 2539,
                                    "name": "l1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2567,
                            "end": 2620,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2571,
                              "end": 2577,
                              "left": {
                                "type": "Identifier",
                                "start": 2571,
                                "end": 2572,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 2576,
                                "end": 2577,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2579,
                              "end": 2620,
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "start": 2597,
                                  "end": 2606,
                                  "label": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2633,
                            "end": 2689,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2637,
                              "end": 2643,
                              "left": {
                                "type": "Identifier",
                                "start": 2637,
                                "end": 2638,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 2642,
                                "end": 2643,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2645,
                              "end": 2689,
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "start": 2663,
                                  "end": 2675,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 2672,
                                    "end": 2674,
                                    "name": "l1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2702,
                            "end": 2758,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2706,
                              "end": 2712,
                              "left": {
                                "type": "Identifier",
                                "start": 2706,
                                "end": 2707,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 2711,
                                "end": 2712,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2714,
                              "end": 2758,
                              "body": [
                                {
                                  "type": "ContinueStatement",
                                  "start": 2732,
                                  "end": 2744,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 2741,
                                    "end": 2743,
                                    "name": "l0",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2771,
                            "end": 2828,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2775,
                              "end": 2781,
                              "left": {
                                "type": "Identifier",
                                "start": 2775,
                                "end": 2776,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 2780,
                                "end": 2781,
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2783,
                              "end": 2828,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2801,
                                  "end": 2814,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2808,
                                    "end": 2813,
                                    "value": "456",
                                    "raw": "\"456\""
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2841,
                            "end": 2892,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2845,
                              "end": 2851,
                              "left": {
                                "type": "Identifier",
                                "start": 2845,
                                "end": 2846,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "start": 2850,
                                "end": 2851,
                                "value": 3,
                                "raw": "3"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2853,
                              "end": 2892,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2871,
                                  "end": 2878,
                                  "argument": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1525,
                      "end": 1527,
                      "name": "l1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1481,
              "end": 1483,
              "name": "l0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
