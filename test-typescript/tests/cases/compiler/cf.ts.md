cf.ts
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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 36,
                  "end": 38,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 50,
                  "end": 51,
                  "raw": "3",
                  "value": 3
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "LabeledStatement",
            "start": 58,
            "end": 406,
            "body": {
              "type": "ForStatement",
              "start": 62,
              "end": 406,
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 406,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 95,
                    "end": 159,
                    "alternate": null,
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
                            "decorators": [],
                            "name": "L1",
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
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 146,
                              "end": 148,
                              "raw": "11",
                              "value": 11
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 99,
                      "end": 103,
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 102,
                        "end": 103,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 168,
                    "end": 248,
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
                            "argument": {
                              "type": "Identifier",
                              "start": 234,
                              "end": 235,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "operator": "--",
                            "prefix": false
                          }
                        }
                      ]
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
                            "argument": {
                              "type": "Identifier",
                              "start": 192,
                              "end": 193,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "operator": "++",
                            "prefix": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 172,
                      "end": 176,
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 175,
                        "end": 176,
                        "raw": "3",
                        "value": 3
                      }
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
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 277,
                              "end": 278,
                              "raw": "2",
                              "value": 2
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "start": 292,
                          "end": 363,
                          "alternate": null,
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
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 346,
                                    "end": 348,
                                    "raw": "12",
                                    "value": 12
                                  }
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 296,
                            "end": 301,
                            "operator": "==",
                            "left": {
                              "type": "Identifier",
                              "start": 296,
                              "end": 297,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 299,
                              "end": 301,
                              "raw": "20",
                              "value": 20
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 381,
                      "end": 385,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 382,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 383,
                        "end": 385,
                        "raw": "41",
                        "value": 41
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
                      "argument": {
                        "type": "Identifier",
                        "start": 396,
                        "end": 397,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  }
                ]
              },
              "init": {
                "type": "VariableDeclaration",
                "start": 67,
                "end": 74,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 71,
                    "end": 74,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 73,
                      "end": 74,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "test": {
                "type": "BinaryExpression",
                "start": 75,
                "end": 79,
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 77,
                  "end": 79,
                  "raw": "19",
                  "value": 19
                }
              },
              "update": {
                "type": "UpdateExpression",
                "start": 80,
                "end": 83,
                "argument": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "operator": "++",
                "prefix": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 58,
              "end": 60,
              "decorators": [],
              "name": "L1",
              "optional": false
            }
          },
          {
            "type": "WhileStatement",
            "start": 411,
            "end": 446,
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
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 435,
                      "end": 439,
                      "operator": ">>",
                      "left": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 438,
                        "end": 439,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 418,
              "end": 421,
              "operator": ">",
              "left": {
                "type": "Identifier",
                "start": 418,
                "end": 419,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 420,
                "end": 421,
                "raw": "2",
                "value": 2
              }
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
                              "decorators": [],
                              "name": "L3",
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
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 585,
                                "end": 587,
                                "raw": "14",
                                "value": 14
                              }
                            }
                          }
                        ]
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
                              "decorators": [],
                              "name": "L2",
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
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 520,
                                "end": 522,
                                "raw": "13",
                                "value": 13
                              }
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 477,
                        "end": 480,
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 478,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 479,
                          "end": 480,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 471,
                      "decorators": [],
                      "name": "L3",
                      "optional": false
                    }
                  }
                ]
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 665,
                        "end": 666,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  }
                ]
              },
              "handler": {
                "type": "CatchClause",
                "start": 609,
                "end": 639,
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
                        "argument": {
                          "type": "Identifier",
                          "start": 629,
                          "end": 630,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "operator": "++",
                        "prefix": false
                      }
                    }
                  ]
                },
                "param": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                }
              }
            },
            "label": {
              "type": "Identifier",
              "start": 451,
              "end": 453,
              "decorators": [],
              "name": "L2",
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
              "argument": {
                "type": "Identifier",
                "start": 678,
                "end": 679,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ForStatement",
            "start": 687,
            "end": 743,
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
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 731,
                  "end": 737,
                  "label": null
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 692,
              "end": 699,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 696,
                  "end": 699,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 698,
                    "end": 699,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 700,
              "end": 704,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 700,
                "end": 701,
                "decorators": [],
                "name": "k",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 702,
                "end": 704,
                "raw": "10",
                "value": 10
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 705,
              "end": 708,
              "argument": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "decorators": [],
                "name": "k",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ForStatement",
            "start": 748,
            "end": 841,
            "body": {
              "type": "BlockStatement",
              "start": 767,
              "end": 841,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 777,
                  "end": 820,
                  "alternate": null,
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
                  "test": {
                    "type": "BinaryExpression",
                    "start": 781,
                    "end": 785,
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "decorators": [],
                      "name": "k",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 784,
                      "end": 785,
                      "raw": "6",
                      "value": 6
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 829,
                  "end": 835,
                  "label": null
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 753,
              "end": 756,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "decorators": [],
                "name": "k",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 755,
                "end": 756,
                "raw": "0",
                "value": 0
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 757,
              "end": 761,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "decorators": [],
                "name": "k",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 759,
                "end": 761,
                "raw": "10",
                "value": 10
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 762,
              "end": 765,
              "argument": {
                "type": "Identifier",
                "start": 762,
                "end": 763,
                "decorators": [],
                "name": "k",
                "optional": false
              },
              "operator": "++",
              "prefix": false
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
