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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 54,
                  "end": 69,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 60,
                    "end": 69,
                    "operator": "+",
                    "left": {
                      "type": "UpdateExpression",
                      "start": 60,
                      "end": 63,
                      "argument": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    },
                    "right": {
                      "type": "UpdateExpression",
                      "start": 66,
                      "end": 69,
                      "argument": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 75,
            "end": 141,
            "alternate": {
              "type": "BlockStatement",
              "start": 119,
              "end": 141,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 129,
                  "end": 135,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 129,
                    "end": 134,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 133,
                      "end": 134,
                      "raw": "5",
                      "value": 5,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
            "test": {
              "type": "BinaryExpression",
              "start": 79,
              "end": 85,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 14,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 16,
            "end": 21,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 28,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
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
            "argument": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          },
          {
            "type": "UpdateExpression",
            "start": 35,
            "end": 38,
            "argument": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": true
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 145,
      "end": 291,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 199,
                  "end": 214,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 205,
                    "end": 214,
                    "operator": "+",
                    "left": {
                      "type": "UpdateExpression",
                      "start": 205,
                      "end": 208,
                      "argument": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    },
                    "right": {
                      "type": "UpdateExpression",
                      "start": 211,
                      "end": 214,
                      "argument": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 212,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 220,
            "end": 289,
            "alternate": {
              "type": "BlockStatement",
              "start": 267,
              "end": 289,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 277,
                  "end": 283,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 277,
                    "end": 282,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 281,
                      "end": 282,
                      "raw": "5",
                      "value": 5,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
            "test": {
              "type": "BinaryExpression",
              "start": 224,
              "end": 230,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 150,
        "end": 166,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 154,
            "end": 159,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 161,
            "end": 166,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 165,
              "end": 166,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 168,
        "end": 173,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
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
            "argument": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          },
          {
            "type": "UpdateExpression",
            "start": 180,
            "end": 183,
            "argument": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": true
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 353,
                    "end": 368,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 359,
                      "end": 368,
                      "operator": "+",
                      "left": {
                        "type": "UpdateExpression",
                        "start": 359,
                        "end": 362,
                        "argument": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 360,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "++",
                        "prefix": false
                      },
                      "right": {
                        "type": "UpdateExpression",
                        "start": 365,
                        "end": 368,
                        "argument": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 366,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "++",
                        "prefix": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "IfStatement",
              "start": 374,
              "end": 445,
              "alternate": {
                "type": "BlockStatement",
                "start": 423,
                "end": 445,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 433,
                    "end": 439,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 433,
                      "end": 438,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 433,
                        "end": 434,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 437,
                        "end": 438,
                        "raw": "5",
                        "value": 5,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
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
                      "decorators": [],
                      "name": "loop",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 378,
                "end": 384,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 379,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 383,
                  "end": 384,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 304,
          "end": 320,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 308,
              "end": 313,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 312,
                "end": 313,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "VariableDeclarator",
              "start": 315,
              "end": 320,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 319,
                "end": 320,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 322,
          "end": 327,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
              "argument": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": true
            },
            {
              "type": "UpdateExpression",
              "start": 334,
              "end": 337,
              "argument": {
                "type": "Identifier",
                "start": 336,
                "end": 337,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "--",
              "prefix": true
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 293,
        "end": 297,
        "decorators": [],
        "name": "loop",
        "optional": false,
        "typeAnnotation": null
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 506,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 509,
                    "end": 524,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 515,
                      "end": 524,
                      "operator": "+",
                      "left": {
                        "type": "UpdateExpression",
                        "start": 515,
                        "end": 518,
                        "argument": {
                          "type": "Identifier",
                          "start": 515,
                          "end": 516,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "++",
                        "prefix": false
                      },
                      "right": {
                        "type": "UpdateExpression",
                        "start": 521,
                        "end": 524,
                        "argument": {
                          "type": "Identifier",
                          "start": 521,
                          "end": 522,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "++",
                        "prefix": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "IfStatement",
              "start": 530,
              "end": 604,
              "alternate": {
                "type": "BlockStatement",
                "start": 582,
                "end": 604,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 592,
                    "end": 598,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 592,
                      "end": 597,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 593,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 596,
                        "end": 597,
                        "raw": "5",
                        "value": 5,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
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
                      "decorators": [],
                      "name": "loop",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 534,
                "end": 540,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 539,
                  "end": 540,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 460,
          "end": 476,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 464,
              "end": 469,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 468,
                "end": 469,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "VariableDeclarator",
              "start": 471,
              "end": 476,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 475,
                "end": 476,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 478,
          "end": 483,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
              "argument": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": true
            },
            {
              "type": "UpdateExpression",
              "start": 490,
              "end": 493,
              "argument": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "--",
              "prefix": true
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 449,
        "end": 453,
        "decorators": [],
        "name": "loop",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
