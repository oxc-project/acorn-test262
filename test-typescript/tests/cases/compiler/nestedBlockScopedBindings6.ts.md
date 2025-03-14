__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1183,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 112,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 112,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 20,
            "end": 65,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 39,
              "end": 65,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 49,
                  "end": 59,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 49,
                    "end": 58,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 53,
                      "end": 58,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 57,
                        "end": 58,
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
              "end": 37,
              "elements": [
                {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "ForStatement",
            "start": 70,
            "end": 110,
            "body": {
              "type": "BlockStatement",
              "start": 84,
              "end": 110,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 94,
                  "end": 104,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 94,
                    "end": 103,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 98,
                      "end": 103,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 99,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 102,
                        "end": 103,
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
              "start": 75,
              "end": 80,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 79,
                  "end": 80,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
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
      "start": 114,
      "end": 243,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 128,
        "end": 243,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 134,
            "end": 196,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 153,
              "end": 196,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 163,
                  "end": 173,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 163,
                    "end": 172,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 167,
                      "end": 172,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 171,
                        "end": 172,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 182,
                  "end": 190,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 182,
                    "end": 189,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
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
              "start": 139,
              "end": 144,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 143,
                  "end": 144,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
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
              "start": 148,
              "end": 151,
              "elements": [
                {
                  "type": "Literal",
                  "start": 149,
                  "end": 150,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "ForStatement",
            "start": 201,
            "end": 241,
            "body": {
              "type": "BlockStatement",
              "start": 215,
              "end": 241,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 225,
                  "end": 235,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 225,
                    "end": 234,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 229,
                      "end": 234,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 233,
                        "end": 234,
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
              "start": 206,
              "end": 211,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 210,
                  "end": 211,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
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
        "start": 123,
        "end": 125,
        "decorators": [],
        "name": "a1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 245,
      "end": 374,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 259,
        "end": 374,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 265,
            "end": 310,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 284,
              "end": 310,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 294,
                  "end": 304,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 294,
                    "end": 303,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 295,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 298,
                      "end": 303,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 299,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 302,
                        "end": 303,
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
              "start": 270,
              "end": 275,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 274,
                  "end": 275,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 275,
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
              "start": 279,
              "end": 282,
              "elements": [
                {
                  "type": "Literal",
                  "start": 280,
                  "end": 281,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "ForStatement",
            "start": 315,
            "end": 372,
            "body": {
              "type": "BlockStatement",
              "start": 329,
              "end": 372,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 339,
                  "end": 349,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 339,
                    "end": 348,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 339,
                      "end": 340,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 343,
                      "end": 348,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 344,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 347,
                        "end": 348,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 358,
                  "end": 366,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 358,
                    "end": 365,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 365,
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
              "start": 320,
              "end": 325,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 324,
                  "end": 325,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
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
        "start": 254,
        "end": 256,
        "decorators": [],
        "name": "a2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 376,
      "end": 522,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 390,
        "end": 522,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 396,
            "end": 458,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 415,
              "end": 458,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 425,
                  "end": 435,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 425,
                    "end": 434,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 426,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 429,
                      "end": 434,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 430,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 433,
                        "end": 434,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 444,
                  "end": 452,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 444,
                    "end": 451,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 451,
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
              "start": 401,
              "end": 406,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 405,
                  "end": 406,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 406,
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
              "start": 410,
              "end": 413,
              "elements": [
                {
                  "type": "Literal",
                  "start": 411,
                  "end": 412,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "ForStatement",
            "start": 463,
            "end": 520,
            "body": {
              "type": "BlockStatement",
              "start": 477,
              "end": 520,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 487,
                  "end": 497,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 487,
                    "end": 496,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 487,
                      "end": 488,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 491,
                      "end": 496,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 495,
                        "end": 496,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 506,
                  "end": 514,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 506,
                    "end": 513,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 512,
                      "end": 513,
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
              "start": 468,
              "end": 473,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 472,
                  "end": 473,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 473,
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
        "start": 385,
        "end": 387,
        "decorators": [],
        "name": "a3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 524,
      "end": 685,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 538,
        "end": 685,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 544,
            "end": 606,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 563,
              "end": 606,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 573,
                  "end": 583,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 573,
                    "end": 582,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 574,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 577,
                      "end": 582,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 578,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 581,
                        "end": 582,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 592,
                  "end": 600,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 592,
                    "end": 599,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 598,
                      "end": 599,
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
              "start": 549,
              "end": 554,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 553,
                  "end": 554,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 554,
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
              "start": 558,
              "end": 561,
              "elements": [
                {
                  "type": "Literal",
                  "start": 559,
                  "end": 560,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "SwitchStatement",
            "start": 611,
            "end": 683,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 632,
                "end": 677,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 652,
                    "end": 658,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 656,
                        "end": 657,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 656,
                          "end": 657,
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
                    "start": 671,
                    "end": 677,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 637,
                  "end": 638,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 619,
              "end": 620,
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
        "start": 533,
        "end": 535,
        "decorators": [],
        "name": "a4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 688,
      "end": 853,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 702,
        "end": 853,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 708,
            "end": 753,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 727,
              "end": 753,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 737,
                  "end": 747,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 737,
                    "end": 746,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 738,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 741,
                      "end": 746,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 741,
                        "end": 742,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 745,
                        "end": 746,
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
              "start": 713,
              "end": 718,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 717,
                  "end": 718,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
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
              "start": 722,
              "end": 725,
              "elements": [
                {
                  "type": "Literal",
                  "start": 723,
                  "end": 724,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "SwitchStatement",
            "start": 758,
            "end": 851,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 779,
                "end": 845,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 799,
                    "end": 805,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 803,
                        "end": 804,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 803,
                          "end": 804,
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
                    "start": 818,
                    "end": 826,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 818,
                      "end": 825,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 824,
                        "end": 825,
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
                    "start": 839,
                    "end": 845,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 784,
                  "end": 785,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 766,
              "end": 767,
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
        "start": 697,
        "end": 699,
        "decorators": [],
        "name": "a5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 999,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 869,
        "end": 999,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 875,
            "end": 920,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 894,
              "end": 920,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 904,
                  "end": 914,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 904,
                    "end": 913,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 904,
                      "end": 905,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 908,
                      "end": 913,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 908,
                        "end": 909,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 912,
                        "end": 913,
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
              "start": 880,
              "end": 885,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 884,
                  "end": 885,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 885,
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
              "start": 889,
              "end": 892,
              "elements": [
                {
                  "type": "Literal",
                  "start": 890,
                  "end": 891,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "SwitchStatement",
            "start": 925,
            "end": 997,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 946,
                "end": 991,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 966,
                    "end": 972,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 970,
                        "end": 971,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 970,
                          "end": 971,
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
                    "start": 985,
                    "end": 991,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 951,
                  "end": 952,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 933,
              "end": 934,
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
        "start": 864,
        "end": 866,
        "decorators": [],
        "name": "a6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1001,
      "end": 1183,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1015,
        "end": 1183,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1021,
            "end": 1083,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1040,
              "end": 1083,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1050,
                  "end": 1060,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1050,
                    "end": 1059,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1050,
                      "end": 1051,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1054,
                      "end": 1059,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1054,
                        "end": 1055,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1058,
                        "end": 1059,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1069,
                  "end": 1077,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1069,
                    "end": 1076,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 1075,
                      "end": 1076,
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
              "start": 1026,
              "end": 1031,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1030,
                  "end": 1031,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1030,
                    "end": 1031,
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
              "start": 1035,
              "end": 1038,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1036,
                  "end": 1037,
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "SwitchStatement",
            "start": 1088,
            "end": 1181,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1109,
                "end": 1175,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1129,
                    "end": 1135,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1133,
                        "end": 1134,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1133,
                          "end": 1134,
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
                    "start": 1148,
                    "end": 1156,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1148,
                      "end": 1155,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 1154,
                        "end": 1155,
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
                    "start": 1169,
                    "end": 1175,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1114,
                  "end": 1115,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 1096,
              "end": 1097,
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
        "start": 1010,
        "end": 1012,
        "decorators": [],
        "name": "a7",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
