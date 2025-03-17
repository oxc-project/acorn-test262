__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1603,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 364,
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 16,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "value": 2,
              "raw": "2"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 28,
        "left": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "update": {
        "type": "SequenceExpression",
        "start": 30,
        "end": 38,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 30,
            "end": 33,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "UpdateExpression",
            "start": 35,
            "end": 38,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 364,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 46,
            "end": 70,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 50,
                "end": 69,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 54,
                  "end": 69,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 60,
                    "end": 69,
                    "left": {
                      "type": "UpdateExpression",
                      "start": 60,
                      "end": 63,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "+",
                    "right": {
                      "type": "UpdateExpression",
                      "start": 66,
                      "end": 69,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 75,
            "end": 362,
            "test": {
              "type": "BinaryExpression",
              "start": 79,
              "end": 85,
              "left": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 87,
              "end": 109,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 97,
                  "end": 103,
                  "label": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 119,
              "end": 362,
              "body": [
                {
                  "type": "ForStatement",
                  "start": 129,
                  "end": 332,
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 134,
                    "end": 143,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 138,
                        "end": 143,
                        "id": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 142,
                          "end": 143,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 145,
                    "end": 150,
                    "left": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "start": 149,
                      "end": 150,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 152,
                    "end": 155,
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 157,
                    "end": 332,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 171,
                        "end": 187,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 175,
                            "end": 186,
                            "id": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 179,
                              "end": 186,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "Identifier",
                                "start": 185,
                                "end": 186,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      {
                        "type": "IfStatement",
                        "start": 200,
                        "end": 322,
                        "test": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 205,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 207,
                          "end": 268,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 225,
                              "end": 231,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 225,
                                "end": 230,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 225,
                                  "end": 226,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 229,
                                  "end": 230,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "BreakStatement",
                              "start": 248,
                              "end": 254,
                              "label": null
                            }
                          ]
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 286,
                          "end": 322,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 304,
                              "end": 308,
                              "expression": {
                                "type": "UpdateExpression",
                                "start": 304,
                                "end": 307,
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 304,
                                  "end": 305,
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
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 350,
                  "end": 356,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 350,
                    "end": 355,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 354,
                      "end": 355,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 367,
      "end": 737,
      "init": {
        "type": "VariableDeclaration",
        "start": 372,
        "end": 388,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 376,
            "end": 381,
            "id": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 380,
              "end": 381,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 383,
            "end": 388,
            "id": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 387,
              "end": 388,
              "value": 2,
              "raw": "2"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 390,
        "end": 395,
        "left": {
          "type": "Identifier",
          "start": 390,
          "end": 391,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "start": 394,
          "end": 395,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "update": {
        "type": "SequenceExpression",
        "start": 397,
        "end": 405,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 397,
            "end": 400,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "UpdateExpression",
            "start": 402,
            "end": 405,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 407,
        "end": 737,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 413,
            "end": 437,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 417,
                "end": 436,
                "id": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 421,
                  "end": 436,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 427,
                    "end": 436,
                    "left": {
                      "type": "UpdateExpression",
                      "start": 427,
                      "end": 430,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 427,
                        "end": 428,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "+",
                    "right": {
                      "type": "UpdateExpression",
                      "start": 433,
                      "end": 436,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 433,
                        "end": 434,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 442,
            "end": 735,
            "test": {
              "type": "BinaryExpression",
              "start": 446,
              "end": 452,
              "left": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 451,
                "end": 452,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 454,
              "end": 479,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 464,
                  "end": 473,
                  "label": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 489,
              "end": 735,
              "body": [
                {
                  "type": "ForStatement",
                  "start": 499,
                  "end": 705,
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 504,
                    "end": 513,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 508,
                        "end": 513,
                        "id": {
                          "type": "Identifier",
                          "start": 508,
                          "end": 509,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 512,
                          "end": 513,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 515,
                    "end": 520,
                    "left": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 516,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "start": 519,
                      "end": 520,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 522,
                    "end": 525,
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 525,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 527,
                    "end": 705,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 541,
                        "end": 557,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 545,
                            "end": 556,
                            "id": {
                              "type": "Identifier",
                              "start": 545,
                              "end": 546,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 549,
                              "end": 556,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "Identifier",
                                "start": 555,
                                "end": 556,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      {
                        "type": "IfStatement",
                        "start": 570,
                        "end": 695,
                        "test": {
                          "type": "Identifier",
                          "start": 574,
                          "end": 575,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 577,
                          "end": 641,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 595,
                              "end": 601,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 595,
                                "end": 600,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 595,
                                  "end": 596,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 599,
                                  "end": 600,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ContinueStatement",
                              "start": 618,
                              "end": 627,
                              "label": null
                            }
                          ]
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 659,
                          "end": 695,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 677,
                              "end": 681,
                              "expression": {
                                "type": "UpdateExpression",
                                "start": 677,
                                "end": 680,
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 677,
                                  "end": 678,
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
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 723,
                  "end": 729,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 723,
                    "end": 728,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 723,
                      "end": 724,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 727,
                      "end": 728,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 739,
      "end": 1165,
      "body": {
        "type": "ForStatement",
        "start": 746,
        "end": 1165,
        "init": {
          "type": "VariableDeclaration",
          "start": 751,
          "end": 767,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 755,
              "end": 760,
              "id": {
                "type": "Identifier",
                "start": 755,
                "end": 756,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 759,
                "end": 760,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            },
            {
              "type": "VariableDeclarator",
              "start": 762,
              "end": 767,
              "id": {
                "type": "Identifier",
                "start": 762,
                "end": 763,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 766,
                "end": 767,
                "value": 2,
                "raw": "2"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        "test": {
          "type": "BinaryExpression",
          "start": 769,
          "end": 774,
          "left": {
            "type": "Identifier",
            "start": 769,
            "end": 770,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "start": 773,
            "end": 774,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "update": {
          "type": "SequenceExpression",
          "start": 776,
          "end": 784,
          "expressions": [
            {
              "type": "UpdateExpression",
              "start": 776,
              "end": 779,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 778,
                "end": 779,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "UpdateExpression",
              "start": 781,
              "end": 784,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 783,
                "end": 784,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "body": {
          "type": "BlockStatement",
          "start": 786,
          "end": 1165,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 792,
              "end": 816,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 796,
                  "end": 815,
                  "id": {
                    "type": "Identifier",
                    "start": 796,
                    "end": 797,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 800,
                    "end": 815,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 806,
                      "end": 815,
                      "left": {
                        "type": "UpdateExpression",
                        "start": 806,
                        "end": 809,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 806,
                          "end": 807,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "UpdateExpression",
                        "start": 812,
                        "end": 815,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 813,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 821,
              "end": 1163,
              "test": {
                "type": "BinaryExpression",
                "start": 825,
                "end": 831,
                "left": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 826,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "start": 830,
                  "end": 831,
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 833,
                "end": 861,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 843,
                    "end": 855,
                    "label": {
                      "type": "Identifier",
                      "start": 849,
                      "end": 854,
                      "name": "loop2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 871,
                "end": 1163,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 881,
                    "end": 1133,
                    "body": {
                      "type": "ForStatement",
                      "start": 896,
                      "end": 1133,
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 901,
                        "end": 910,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 905,
                            "end": 910,
                            "id": {
                              "type": "Identifier",
                              "start": 905,
                              "end": 906,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 909,
                              "end": 910,
                              "value": 1,
                              "raw": "1"
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 912,
                        "end": 917,
                        "left": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 913,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "start": 916,
                          "end": 917,
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 919,
                        "end": 922,
                        "operator": "--",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 921,
                          "end": 922,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 924,
                        "end": 1133,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 938,
                            "end": 954,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 942,
                                "end": 953,
                                "id": {
                                  "type": "Identifier",
                                  "start": 942,
                                  "end": 943,
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 946,
                                  "end": 953,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "Identifier",
                                    "start": 952,
                                    "end": 953,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "definite": false
                              }
                            ],
                            "kind": "let",
                            "declare": false
                          },
                          {
                            "type": "IfStatement",
                            "start": 967,
                            "end": 1123,
                            "test": {
                              "type": "Identifier",
                              "start": 971,
                              "end": 972,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 974,
                              "end": 1041,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 992,
                                  "end": 998,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 992,
                                    "end": 997,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 992,
                                      "end": 993,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 996,
                                      "end": 997,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "BreakStatement",
                                  "start": 1015,
                                  "end": 1027,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 1021,
                                    "end": 1026,
                                    "name": "loop1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "start": 1059,
                              "end": 1123,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1077,
                                  "end": 1081,
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "start": 1077,
                                    "end": 1080,
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1077,
                                      "end": 1078,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "BreakStatement",
                                  "start": 1098,
                                  "end": 1109,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 1104,
                                    "end": 1109,
                                    "name": "loop2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 881,
                      "end": 886,
                      "name": "loop1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1151,
                    "end": 1157,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1151,
                      "end": 1156,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1151,
                        "end": 1152,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1155,
                        "end": 1156,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 739,
        "end": 744,
        "name": "loop2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1167,
      "end": 1602,
      "body": {
        "type": "ForStatement",
        "start": 1174,
        "end": 1602,
        "init": {
          "type": "VariableDeclaration",
          "start": 1179,
          "end": 1195,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1183,
              "end": 1188,
              "id": {
                "type": "Identifier",
                "start": 1183,
                "end": 1184,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 1187,
                "end": 1188,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            },
            {
              "type": "VariableDeclarator",
              "start": 1190,
              "end": 1195,
              "id": {
                "type": "Identifier",
                "start": 1190,
                "end": 1191,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 1194,
                "end": 1195,
                "value": 2,
                "raw": "2"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        "test": {
          "type": "BinaryExpression",
          "start": 1197,
          "end": 1202,
          "left": {
            "type": "Identifier",
            "start": 1197,
            "end": 1198,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "start": 1201,
            "end": 1202,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "update": {
          "type": "SequenceExpression",
          "start": 1204,
          "end": 1212,
          "expressions": [
            {
              "type": "UpdateExpression",
              "start": 1204,
              "end": 1207,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1206,
                "end": 1207,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "UpdateExpression",
              "start": 1209,
              "end": 1212,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1211,
                "end": 1212,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "body": {
          "type": "BlockStatement",
          "start": 1214,
          "end": 1602,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 1220,
              "end": 1244,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1224,
                  "end": 1243,
                  "id": {
                    "type": "Identifier",
                    "start": 1224,
                    "end": 1225,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 1228,
                    "end": 1243,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1234,
                      "end": 1243,
                      "left": {
                        "type": "UpdateExpression",
                        "start": 1234,
                        "end": 1237,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 1234,
                          "end": 1235,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "UpdateExpression",
                        "start": 1240,
                        "end": 1243,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 1240,
                          "end": 1241,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 1249,
              "end": 1600,
              "test": {
                "type": "BinaryExpression",
                "start": 1253,
                "end": 1259,
                "left": {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1254,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "start": 1258,
                  "end": 1259,
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1261,
                "end": 1292,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 1271,
                    "end": 1286,
                    "label": {
                      "type": "Identifier",
                      "start": 1280,
                      "end": 1285,
                      "name": "loop2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 1302,
                "end": 1600,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 1312,
                    "end": 1570,
                    "body": {
                      "type": "ForStatement",
                      "start": 1327,
                      "end": 1570,
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 1332,
                        "end": 1341,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1336,
                            "end": 1341,
                            "id": {
                              "type": "Identifier",
                              "start": 1336,
                              "end": 1337,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1340,
                              "end": 1341,
                              "value": 1,
                              "raw": "1"
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 1343,
                        "end": 1348,
                        "left": {
                          "type": "Identifier",
                          "start": 1343,
                          "end": 1344,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "start": 1347,
                          "end": 1348,
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 1350,
                        "end": 1353,
                        "operator": "--",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 1352,
                          "end": 1353,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1355,
                        "end": 1570,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1369,
                            "end": 1385,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1373,
                                "end": 1384,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1373,
                                  "end": 1374,
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 1377,
                                  "end": 1384,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "Identifier",
                                    "start": 1383,
                                    "end": 1384,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "definite": false
                              }
                            ],
                            "kind": "let",
                            "declare": false
                          },
                          {
                            "type": "IfStatement",
                            "start": 1398,
                            "end": 1560,
                            "test": {
                              "type": "Identifier",
                              "start": 1402,
                              "end": 1403,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1405,
                              "end": 1475,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1423,
                                  "end": 1429,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1423,
                                    "end": 1428,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1423,
                                      "end": 1424,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1427,
                                      "end": 1428,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ContinueStatement",
                                  "start": 1446,
                                  "end": 1461,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 1455,
                                    "end": 1460,
                                    "name": "loop1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "start": 1493,
                              "end": 1560,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1511,
                                  "end": 1515,
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "start": 1511,
                                    "end": 1514,
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1511,
                                      "end": 1512,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ContinueStatement",
                                  "start": 1532,
                                  "end": 1546,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 1541,
                                    "end": 1546,
                                    "name": "loop2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1312,
                      "end": 1317,
                      "name": "loop1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1588,
                    "end": 1594,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1588,
                      "end": 1593,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1588,
                        "end": 1589,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1592,
                        "end": 1593,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1167,
        "end": 1172,
        "name": "loop2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
