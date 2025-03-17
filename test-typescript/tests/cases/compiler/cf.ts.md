__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 844,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 843,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
        "start": 13,
        "end": 843,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 25,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 24,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 30,
            "end": 39,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 36,
                  "end": 38,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 52,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 51,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 50,
                  "end": 51,
                  "value": 3,
                  "raw": "3"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "LabeledStatement",
            "start": 58,
            "end": 406,
            "body": {
              "type": "ForStatement",
              "start": 62,
              "end": 406,
              "init": {
                "type": "VariableDeclaration",
                "start": 67,
                "end": 74,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 71,
                    "end": 74,
                    "id": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 73,
                      "end": 74,
                      "value": 0,
                      "raw": "0"
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 75,
                "end": 79,
                "left": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "start": 77,
                  "end": 79,
                  "value": 19,
                  "raw": "19"
                }
              },
              "update": {
                "type": "UpdateExpression",
                "start": 80,
                "end": 83,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 406,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 95,
                    "end": 159,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 99,
                      "end": 103,
                      "left": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 102,
                        "end": 103,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 105,
                      "end": 159,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 119,
                          "end": 131,
                          "label": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 130,
                            "name": "L1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 144,
                          "end": 149,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 144,
                            "end": 148,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 146,
                              "end": 148,
                              "value": 11,
                              "raw": "11"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 168,
                    "end": 248,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 172,
                      "end": 176,
                      "left": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 175,
                        "end": 176,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 178,
                      "end": 206,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 192,
                          "end": 196,
                          "expression": {
                            "type": "UpdateExpression",
                            "start": 192,
                            "end": 195,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 192,
                              "end": 193,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 220,
                      "end": 248,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 234,
                          "end": 238,
                          "expression": {
                            "type": "UpdateExpression",
                            "start": 234,
                            "end": 237,
                            "operator": "--",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 234,
                              "end": 235,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "DoWhileStatement",
                    "start": 257,
                    "end": 387,
                    "body": {
                      "type": "BlockStatement",
                      "start": 260,
                      "end": 373,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 274,
                          "end": 279,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 274,
                            "end": 278,
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "start": 274,
                              "end": 275,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 277,
                              "end": 278,
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "IfStatement",
                          "start": 292,
                          "end": 363,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 296,
                            "end": 301,
                            "left": {
                              "type": "Identifier",
                              "start": 296,
                              "end": 297,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "==",
                            "right": {
                              "type": "Literal",
                              "start": 299,
                              "end": 301,
                              "value": 20,
                              "raw": "20"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 303,
                            "end": 363,
                            "body": [
                              {
                                "type": "BreakStatement",
                                "start": 321,
                                "end": 327,
                                "label": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 344,
                                "end": 349,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 344,
                                  "end": 348,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 344,
                                    "end": 345,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 346,
                                    "end": 348,
                                    "value": 12,
                                    "raw": "12"
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": null
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 381,
                      "end": 385,
                      "left": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 382,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 383,
                        "end": 385,
                        "value": 41,
                        "raw": "41"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 396,
                    "end": 400,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 396,
                      "end": 399,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 396,
                        "end": 397,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              }
            },
            "label": {
              "type": "Identifier",
              "start": 58,
              "end": 60,
              "name": "L1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "WhileStatement",
            "start": 411,
            "end": 446,
            "test": {
              "type": "BinaryExpression",
              "start": 418,
              "end": 421,
              "left": {
                "type": "Identifier",
                "start": 418,
                "end": 419,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 420,
                "end": 421,
                "value": 2,
                "raw": "2"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 423,
              "end": 446,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 433,
                  "end": 440,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 433,
                    "end": 439,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 435,
                      "end": 439,
                      "left": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": ">>",
                      "right": {
                        "type": "Literal",
                        "start": 438,
                        "end": 439,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "LabeledStatement",
            "start": 451,
            "end": 673,
            "body": {
              "type": "TryStatement",
              "start": 455,
              "end": 673,
              "block": {
                "type": "BlockStatement",
                "start": 459,
                "end": 604,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 469,
                    "end": 598,
                    "body": {
                      "type": "IfStatement",
                      "start": 473,
                      "end": 598,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 477,
                        "end": 480,
                        "left": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 478,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "<",
                        "right": {
                          "type": "Identifier",
                          "start": 479,
                          "end": 480,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 482,
                        "end": 533,
                        "body": [
                          {
                            "type": "BreakStatement",
                            "start": 496,
                            "end": 505,
                            "label": {
                              "type": "Identifier",
                              "start": 502,
                              "end": 504,
                              "name": "L2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 518,
                            "end": 523,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 518,
                              "end": 522,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 518,
                                "end": 519,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 520,
                                "end": 522,
                                "value": 13,
                                "raw": "13"
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 547,
                        "end": 598,
                        "body": [
                          {
                            "type": "BreakStatement",
                            "start": 561,
                            "end": 570,
                            "label": {
                              "type": "Identifier",
                              "start": 567,
                              "end": 569,
                              "name": "L3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 583,
                            "end": 588,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 583,
                              "end": 587,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 583,
                                "end": 584,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 585,
                                "end": 587,
                                "value": 14,
                                "raw": "14"
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 471,
                      "name": "L3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "handler": {
                "type": "CatchClause",
                "start": 609,
                "end": 639,
                "param": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 619,
                  "end": 639,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 629,
                      "end": 633,
                      "expression": {
                        "type": "UpdateExpression",
                        "start": 629,
                        "end": 632,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 629,
                          "end": 630,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "directive": null
                    }
                  ]
                }
              },
              "finalizer": {
                "type": "BlockStatement",
                "start": 652,
                "end": 673,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 662,
                    "end": 667,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 662,
                      "end": 666,
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 663,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 665,
                        "end": 666,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  }
                ]
              }
            },
            "label": {
              "type": "Identifier",
              "start": 451,
              "end": 453,
              "name": "L2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 678,
            "end": 682,
            "expression": {
              "type": "UpdateExpression",
              "start": 678,
              "end": 681,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 678,
                "end": 679,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ForStatement",
            "start": 687,
            "end": 743,
            "init": {
              "type": "VariableDeclaration",
              "start": 692,
              "end": 699,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 696,
                  "end": 699,
                  "id": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 698,
                    "end": 699,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 700,
              "end": 704,
              "left": {
                "type": "Identifier",
                "start": 700,
                "end": 701,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 702,
                "end": 704,
                "value": 10,
                "raw": "10"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 705,
              "end": 708,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 710,
              "end": 743,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 720,
                  "end": 722,
                  "expression": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 721,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "BreakStatement",
                  "start": 731,
                  "end": 737,
                  "label": null
                }
              ]
            }
          },
          {
            "type": "ForStatement",
            "start": 748,
            "end": 841,
            "init": {
              "type": "AssignmentExpression",
              "start": 753,
              "end": 756,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 755,
                "end": 756,
                "value": 0,
                "raw": "0"
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 757,
              "end": 761,
              "left": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 759,
                "end": 761,
                "value": 10,
                "raw": "10"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 762,
              "end": 765,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 762,
                "end": 763,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 767,
              "end": 841,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 777,
                  "end": 820,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 781,
                    "end": 785,
                    "left": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "name": "k",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 784,
                      "end": 785,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 787,
                    "end": 820,
                    "body": [
                      {
                        "type": "ContinueStatement",
                        "start": 801,
                        "end": 810,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "BreakStatement",
                  "start": 829,
                  "end": 835,
                  "label": null
                }
              ]
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
