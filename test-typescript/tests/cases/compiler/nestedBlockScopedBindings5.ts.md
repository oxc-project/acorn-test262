__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1076,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 111,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 111,
        "body": [
          {
            "type": "ForInStatement",
            "start": 20,
            "end": 64,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 64,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 48,
                  "end": 58,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 48,
                    "end": 57,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 52,
                      "end": 57,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 53,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 56,
                        "end": 57,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 25,
              "end": 30,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 30,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 34,
              "end": 36,
              "elements": []
            }
          },
          {
            "type": "ForStatement",
            "start": 69,
            "end": 109,
            "body": {
              "type": "BlockStatement",
              "start": 83,
              "end": 109,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 93,
                  "end": 103,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 93,
                    "end": 102,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 97,
                      "end": 102,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 98,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 101,
                        "end": 102,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 74,
              "end": 79,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 78,
                  "end": 79,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": null,
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "a0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 113,
      "end": 241,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 241,
        "body": [
          {
            "type": "ForInStatement",
            "start": 133,
            "end": 194,
            "body": {
              "type": "BlockStatement",
              "start": 151,
              "end": 194,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 161,
                  "end": 171,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 161,
                    "end": 170,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 165,
                      "end": 170,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 169,
                        "end": 170,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 180,
                  "end": 188,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 180,
                    "end": 187,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 138,
              "end": 143,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 142,
                  "end": 143,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 147,
              "end": 149,
              "elements": []
            }
          },
          {
            "type": "ForStatement",
            "start": 199,
            "end": 239,
            "body": {
              "type": "BlockStatement",
              "start": 213,
              "end": 239,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 223,
                  "end": 233,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 223,
                    "end": 232,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 227,
                      "end": 232,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 228,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 231,
                        "end": 232,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 204,
              "end": 209,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 208,
                  "end": 209,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": null,
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 124,
        "decorators": [],
        "name": "a1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 243,
      "end": 371,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 371,
        "body": [
          {
            "type": "ForInStatement",
            "start": 263,
            "end": 307,
            "body": {
              "type": "BlockStatement",
              "start": 281,
              "end": 307,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 291,
                  "end": 301,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 291,
                    "end": 300,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 295,
                      "end": 300,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 299,
                        "end": 300,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 268,
              "end": 273,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 272,
                  "end": 273,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 277,
              "end": 279,
              "elements": []
            }
          },
          {
            "type": "ForStatement",
            "start": 312,
            "end": 369,
            "body": {
              "type": "BlockStatement",
              "start": 326,
              "end": 369,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 336,
                  "end": 346,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 336,
                    "end": 345,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 340,
                      "end": 345,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 341,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 344,
                        "end": 345,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 355,
                  "end": 363,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 355,
                    "end": 362,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 362,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 317,
              "end": 322,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 321,
                  "end": 322,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": null,
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 254,
        "decorators": [],
        "name": "a2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 374,
      "end": 627,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 388,
        "end": 627,
        "body": [
          {
            "type": "ForInStatement",
            "start": 394,
            "end": 455,
            "body": {
              "type": "BlockStatement",
              "start": 412,
              "end": 455,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 422,
                  "end": 432,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 422,
                    "end": 431,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 423,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 426,
                      "end": 431,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 427,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 430,
                        "end": 431,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 441,
                  "end": 449,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 441,
                    "end": 448,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 448,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 399,
              "end": 404,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 403,
                  "end": 404,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 404,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 408,
              "end": 410,
              "elements": []
            }
          },
          {
            "type": "ForStatement",
            "start": 460,
            "end": 522,
            "body": {
              "type": "BlockStatement",
              "start": 479,
              "end": 522,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 489,
                  "end": 499,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 489,
                    "end": 498,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 489,
                      "end": 490,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 493,
                      "end": 498,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 493,
                        "end": 494,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 497,
                        "end": 498,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 508,
                  "end": 516,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 508,
                    "end": 515,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 514,
                      "end": 515,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 465,
              "end": 470,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 469,
                  "end": 470,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 470,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "Literal",
              "start": 471,
              "end": 476,
              "raw": "false",
              "value": false
            },
            "update": null
          },
          {
            "type": "SwitchStatement",
            "start": 527,
            "end": 620,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 548,
                "end": 614,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 568,
                    "end": 574,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 572,
                        "end": 573,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 573,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 587,
                    "end": 595,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 587,
                      "end": 594,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 594,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 608,
                    "end": 614,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 553,
                  "end": 554,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 535,
              "end": 536,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 385,
        "decorators": [],
        "name": "a3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 629,
      "end": 848,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 643,
        "end": 848,
        "body": [
          {
            "type": "ForInStatement",
            "start": 649,
            "end": 693,
            "body": {
              "type": "BlockStatement",
              "start": 667,
              "end": 693,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 677,
                  "end": 687,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 677,
                    "end": 686,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 677,
                      "end": 678,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 681,
                      "end": 686,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 681,
                        "end": 682,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 685,
                        "end": 686,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 654,
              "end": 659,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 658,
                  "end": 659,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 659,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 663,
              "end": 665,
              "elements": []
            }
          },
          {
            "type": "ForStatement",
            "start": 698,
            "end": 743,
            "body": {
              "type": "BlockStatement",
              "start": 717,
              "end": 743,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 727,
                  "end": 737,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 727,
                    "end": 736,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 727,
                      "end": 728,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 731,
                      "end": 736,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 731,
                        "end": 732,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 735,
                        "end": 736,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 703,
              "end": 708,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 707,
                  "end": 708,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "Literal",
              "start": 709,
              "end": 714,
              "raw": "false",
              "value": false
            },
            "update": null
          },
          {
            "type": "SwitchStatement",
            "start": 748,
            "end": 841,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 769,
                "end": 835,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 789,
                    "end": 795,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 793,
                        "end": 794,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 793,
                          "end": 794,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 808,
                    "end": 816,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 808,
                      "end": 815,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 814,
                        "end": 815,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 829,
                    "end": 835,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 774,
                  "end": 775,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 756,
              "end": 757,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 640,
        "decorators": [],
        "name": "a4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 850,
      "end": 1076,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 864,
        "end": 1076,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 870,
            "end": 876,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 874,
                "end": 875,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 874,
                  "end": 875,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForInStatement",
            "start": 881,
            "end": 925,
            "body": {
              "type": "BlockStatement",
              "start": 899,
              "end": 925,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 909,
                  "end": 919,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 909,
                    "end": 918,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 909,
                      "end": 910,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 913,
                      "end": 918,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 913,
                        "end": 914,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 917,
                        "end": 918,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 886,
              "end": 891,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 890,
                  "end": 891,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 890,
                    "end": 891,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 895,
              "end": 897,
              "elements": []
            }
          },
          {
            "type": "ForStatement",
            "start": 930,
            "end": 992,
            "body": {
              "type": "BlockStatement",
              "start": 949,
              "end": 992,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 959,
                  "end": 969,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 959,
                    "end": 968,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 959,
                      "end": 960,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 963,
                      "end": 968,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 963,
                        "end": 964,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 967,
                        "end": 968,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 978,
                  "end": 986,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 978,
                    "end": 985,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 984,
                      "end": 985,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 935,
              "end": 940,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 939,
                  "end": 940,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 939,
                    "end": 940,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "Literal",
              "start": 941,
              "end": 946,
              "raw": "false",
              "value": false
            },
            "update": null
          },
          {
            "type": "SwitchStatement",
            "start": 997,
            "end": 1069,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1018,
                "end": 1063,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1038,
                    "end": 1044,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1042,
                        "end": 1043,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1042,
                          "end": 1043,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1057,
                    "end": 1063,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1023,
                  "end": 1024,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 1005,
              "end": 1006,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 859,
        "end": 861,
        "decorators": [],
        "name": "a5",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
