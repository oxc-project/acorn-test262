__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 606,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 143,
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
        "end": 143,
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
            "end": 141,
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
              "end": 141,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 129,
                  "end": 135,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 129,
                    "end": 134,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 133,
                      "end": 134,
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
      "start": 145,
      "end": 291,
      "init": {
        "type": "VariableDeclaration",
        "start": 150,
        "end": 166,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 154,
            "end": 159,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 161,
            "end": 166,
            "id": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 165,
              "end": 166,
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
        "start": 168,
        "end": 173,
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "update": {
        "type": "SequenceExpression",
        "start": 175,
        "end": 183,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 175,
            "end": 178,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "UpdateExpression",
            "start": 180,
            "end": 183,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
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
        "start": 185,
        "end": 291,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 191,
            "end": 215,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 195,
                "end": 214,
                "id": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 199,
                  "end": 214,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 205,
                    "end": 214,
                    "left": {
                      "type": "UpdateExpression",
                      "start": 205,
                      "end": 208,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "+",
                    "right": {
                      "type": "UpdateExpression",
                      "start": 211,
                      "end": 214,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 212,
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
            "start": 220,
            "end": 289,
            "test": {
              "type": "BinaryExpression",
              "start": 224,
              "end": 230,
              "left": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 232,
              "end": 257,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 242,
                  "end": 251,
                  "label": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 267,
              "end": 289,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 277,
                  "end": 283,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 277,
                    "end": 282,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 281,
                      "end": 282,
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
      "start": 293,
      "end": 447,
      "body": {
        "type": "ForStatement",
        "start": 299,
        "end": 447,
        "init": {
          "type": "VariableDeclaration",
          "start": 304,
          "end": 320,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 308,
              "end": 313,
              "id": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 312,
                "end": 313,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            },
            {
              "type": "VariableDeclarator",
              "start": 315,
              "end": 320,
              "id": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 319,
                "end": 320,
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
          "start": 322,
          "end": 327,
          "left": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "update": {
          "type": "SequenceExpression",
          "start": 329,
          "end": 337,
          "expressions": [
            {
              "type": "UpdateExpression",
              "start": 329,
              "end": 332,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "UpdateExpression",
              "start": 334,
              "end": 337,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 336,
                "end": 337,
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
          "start": 339,
          "end": 447,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 345,
              "end": 369,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 349,
                  "end": 368,
                  "id": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 353,
                    "end": 368,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 359,
                      "end": 368,
                      "left": {
                        "type": "UpdateExpression",
                        "start": 359,
                        "end": 362,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 360,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "UpdateExpression",
                        "start": 365,
                        "end": 368,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 366,
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
              "start": 374,
              "end": 445,
              "test": {
                "type": "BinaryExpression",
                "start": 378,
                "end": 384,
                "left": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 379,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "start": 383,
                  "end": 384,
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 386,
                "end": 413,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 396,
                    "end": 407,
                    "label": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 406,
                      "name": "loop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 423,
                "end": 445,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 433,
                    "end": 439,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 433,
                      "end": 438,
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
                        "type": "Literal",
                        "start": 437,
                        "end": 438,
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
        "start": 293,
        "end": 297,
        "name": "loop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 449,
      "end": 606,
      "body": {
        "type": "ForStatement",
        "start": 455,
        "end": 606,
        "init": {
          "type": "VariableDeclaration",
          "start": 460,
          "end": 476,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 464,
              "end": 469,
              "id": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 468,
                "end": 469,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            },
            {
              "type": "VariableDeclarator",
              "start": 471,
              "end": 476,
              "id": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 475,
                "end": 476,
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
          "start": 478,
          "end": 483,
          "left": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "update": {
          "type": "SequenceExpression",
          "start": 485,
          "end": 493,
          "expressions": [
            {
              "type": "UpdateExpression",
              "start": 485,
              "end": 488,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "UpdateExpression",
              "start": 490,
              "end": 493,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
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
          "start": 495,
          "end": 606,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 501,
              "end": 525,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 505,
                  "end": 524,
                  "id": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 506,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 509,
                    "end": 524,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 515,
                      "end": 524,
                      "left": {
                        "type": "UpdateExpression",
                        "start": 515,
                        "end": 518,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 515,
                          "end": 516,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "UpdateExpression",
                        "start": 521,
                        "end": 524,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 521,
                          "end": 522,
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
              "start": 530,
              "end": 604,
              "test": {
                "type": "BinaryExpression",
                "start": 534,
                "end": 540,
                "left": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "start": 539,
                  "end": 540,
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 542,
                "end": 572,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 552,
                    "end": 566,
                    "label": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 565,
                      "name": "loop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 582,
                "end": 604,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 592,
                    "end": 598,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 592,
                      "end": 597,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 593,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 596,
                        "end": 597,
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
        "start": 449,
        "end": 453,
        "name": "loop",
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
