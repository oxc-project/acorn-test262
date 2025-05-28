__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1819,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 24,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 24,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 17,
              "end": 24
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 34,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 27,
          "end": 34
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 48,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 37,
            "end": 46,
            "argument": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 67,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 59,
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 62,
            "end": 66,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 69,
      "end": 1819,
      "test": {
        "type": "Identifier",
        "start": 73,
        "end": 78,
        "decorators": [],
        "name": "state",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 80,
        "end": 1819,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 84,
            "end": 112,
            "expression": {
              "type": "CallExpression",
              "start": 84,
              "end": 111,
              "callee": {
                "type": "Identifier",
                "start": 84,
                "end": 88,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 89,
                  "end": 110,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 89,
                    "end": 101,
                    "expression": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 94,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 110,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 143,
            "expression": {
              "type": "CallExpression",
              "start": 115,
              "end": 142,
              "callee": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 120,
                  "end": 141,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 120,
                    "end": 132,
                    "expression": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 125,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 129,
                      "end": 132
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 141,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 146,
            "end": 174,
            "expression": {
              "type": "CallExpression",
              "start": 146,
              "end": 173,
              "callee": {
                "type": "Identifier",
                "start": 146,
                "end": 150,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 151,
                  "end": 172,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 151,
                    "end": 163,
                    "expression": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 156,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 160,
                      "end": 163
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 172,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 177,
            "end": 205,
            "expression": {
              "type": "CallExpression",
              "start": 177,
              "end": 204,
              "callee": {
                "type": "Identifier",
                "start": 177,
                "end": 181,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 182,
                  "end": 203,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 182,
                    "end": 194,
                    "expression": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 187,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 191,
                      "end": 194
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 203,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 208,
            "end": 236,
            "expression": {
              "type": "CallExpression",
              "start": 208,
              "end": 235,
              "callee": {
                "type": "Identifier",
                "start": 208,
                "end": 212,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 213,
                  "end": 234,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 213,
                    "end": 225,
                    "expression": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 218,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 222,
                      "end": 225
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 234,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 267,
            "expression": {
              "type": "CallExpression",
              "start": 239,
              "end": 266,
              "callee": {
                "type": "Identifier",
                "start": 239,
                "end": 243,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 244,
                  "end": 265,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 244,
                    "end": 256,
                    "expression": {
                      "type": "Identifier",
                      "start": 244,
                      "end": 249,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 253,
                      "end": 256
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 265,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 270,
            "end": 298,
            "expression": {
              "type": "CallExpression",
              "start": 270,
              "end": 297,
              "callee": {
                "type": "Identifier",
                "start": 270,
                "end": 274,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 275,
                  "end": 296,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 275,
                    "end": 287,
                    "expression": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 280,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 284,
                      "end": 287
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 296,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 301,
            "end": 329,
            "expression": {
              "type": "CallExpression",
              "start": 301,
              "end": 328,
              "callee": {
                "type": "Identifier",
                "start": 301,
                "end": 305,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 306,
                  "end": 327,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 306,
                    "end": 318,
                    "expression": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 311,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 315,
                      "end": 318
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 327,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 332,
            "end": 360,
            "expression": {
              "type": "CallExpression",
              "start": 332,
              "end": 359,
              "callee": {
                "type": "Identifier",
                "start": 332,
                "end": 336,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 337,
                  "end": 358,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 337,
                    "end": 349,
                    "expression": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 342,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 346,
                      "end": 349
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 358,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 363,
            "end": 391,
            "expression": {
              "type": "CallExpression",
              "start": 363,
              "end": 390,
              "callee": {
                "type": "Identifier",
                "start": 363,
                "end": 367,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 368,
                  "end": 389,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 368,
                    "end": 380,
                    "expression": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 373,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 377,
                      "end": 380
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 389,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 394,
            "end": 422,
            "expression": {
              "type": "CallExpression",
              "start": 394,
              "end": 421,
              "callee": {
                "type": "Identifier",
                "start": 394,
                "end": 398,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 399,
                  "end": 420,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 399,
                    "end": 411,
                    "expression": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 404,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 408,
                      "end": 411
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 420,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 425,
            "end": 453,
            "expression": {
              "type": "CallExpression",
              "start": 425,
              "end": 452,
              "callee": {
                "type": "Identifier",
                "start": 425,
                "end": 429,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 430,
                  "end": 451,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 430,
                    "end": 442,
                    "expression": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 435,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 439,
                      "end": 442
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 451,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 456,
            "end": 484,
            "expression": {
              "type": "CallExpression",
              "start": 456,
              "end": 483,
              "callee": {
                "type": "Identifier",
                "start": 456,
                "end": 460,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 461,
                  "end": 482,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 461,
                    "end": 473,
                    "expression": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 466,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 470,
                      "end": 473
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 482,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 487,
            "end": 515,
            "expression": {
              "type": "CallExpression",
              "start": 487,
              "end": 514,
              "callee": {
                "type": "Identifier",
                "start": 487,
                "end": 491,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 492,
                  "end": 513,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 492,
                    "end": 504,
                    "expression": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 497,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 501,
                      "end": 504
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 513,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 518,
            "end": 546,
            "expression": {
              "type": "CallExpression",
              "start": 518,
              "end": 545,
              "callee": {
                "type": "Identifier",
                "start": 518,
                "end": 522,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 523,
                  "end": 544,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 523,
                    "end": 535,
                    "expression": {
                      "type": "Identifier",
                      "start": 523,
                      "end": 528,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 532,
                      "end": 535
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 544,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 549,
            "end": 577,
            "expression": {
              "type": "CallExpression",
              "start": 549,
              "end": 576,
              "callee": {
                "type": "Identifier",
                "start": 549,
                "end": 553,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 554,
                  "end": 575,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 554,
                    "end": 566,
                    "expression": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 559,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 563,
                      "end": 566
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 575,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 580,
            "end": 608,
            "expression": {
              "type": "CallExpression",
              "start": 580,
              "end": 607,
              "callee": {
                "type": "Identifier",
                "start": 580,
                "end": 584,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 585,
                  "end": 606,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 585,
                    "end": 597,
                    "expression": {
                      "type": "Identifier",
                      "start": 585,
                      "end": 590,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 594,
                      "end": 597
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 606,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 611,
            "end": 639,
            "expression": {
              "type": "CallExpression",
              "start": 611,
              "end": 638,
              "callee": {
                "type": "Identifier",
                "start": 611,
                "end": 615,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 616,
                  "end": 637,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 616,
                    "end": 628,
                    "expression": {
                      "type": "Identifier",
                      "start": 616,
                      "end": 621,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 625,
                      "end": 628
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 637,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 642,
            "end": 670,
            "expression": {
              "type": "CallExpression",
              "start": 642,
              "end": 669,
              "callee": {
                "type": "Identifier",
                "start": 642,
                "end": 646,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 647,
                  "end": 668,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 647,
                    "end": 659,
                    "expression": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 652,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 656,
                      "end": 659
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 668,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 673,
            "end": 701,
            "expression": {
              "type": "CallExpression",
              "start": 673,
              "end": 700,
              "callee": {
                "type": "Identifier",
                "start": 673,
                "end": 677,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 678,
                  "end": 699,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 678,
                    "end": 690,
                    "expression": {
                      "type": "Identifier",
                      "start": 678,
                      "end": 683,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 687,
                      "end": 690
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 699,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 704,
            "end": 732,
            "expression": {
              "type": "CallExpression",
              "start": 704,
              "end": 731,
              "callee": {
                "type": "Identifier",
                "start": 704,
                "end": 708,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 709,
                  "end": 730,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 709,
                    "end": 721,
                    "expression": {
                      "type": "Identifier",
                      "start": 709,
                      "end": 714,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 718,
                      "end": 721
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 730,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 735,
            "end": 763,
            "expression": {
              "type": "CallExpression",
              "start": 735,
              "end": 762,
              "callee": {
                "type": "Identifier",
                "start": 735,
                "end": 739,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 740,
                  "end": 761,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 740,
                    "end": 752,
                    "expression": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 745,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 749,
                      "end": 752
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 756,
                    "end": 761,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 766,
            "end": 794,
            "expression": {
              "type": "CallExpression",
              "start": 766,
              "end": 793,
              "callee": {
                "type": "Identifier",
                "start": 766,
                "end": 770,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 771,
                  "end": 792,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 771,
                    "end": 783,
                    "expression": {
                      "type": "Identifier",
                      "start": 771,
                      "end": 776,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 780,
                      "end": 783
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 787,
                    "end": 792,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 797,
            "end": 825,
            "expression": {
              "type": "CallExpression",
              "start": 797,
              "end": 824,
              "callee": {
                "type": "Identifier",
                "start": 797,
                "end": 801,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 802,
                  "end": 823,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 802,
                    "end": 814,
                    "expression": {
                      "type": "Identifier",
                      "start": 802,
                      "end": 807,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 811,
                      "end": 814
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 818,
                    "end": 823,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 828,
            "end": 856,
            "expression": {
              "type": "CallExpression",
              "start": 828,
              "end": 855,
              "callee": {
                "type": "Identifier",
                "start": 828,
                "end": 832,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 833,
                  "end": 854,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 833,
                    "end": 845,
                    "expression": {
                      "type": "Identifier",
                      "start": 833,
                      "end": 838,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 842,
                      "end": 845
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 854,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 859,
            "end": 887,
            "expression": {
              "type": "CallExpression",
              "start": 859,
              "end": 886,
              "callee": {
                "type": "Identifier",
                "start": 859,
                "end": 863,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 864,
                  "end": 885,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 864,
                    "end": 876,
                    "expression": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 869,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 873,
                      "end": 876
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 880,
                    "end": 885,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 890,
            "end": 918,
            "expression": {
              "type": "CallExpression",
              "start": 890,
              "end": 917,
              "callee": {
                "type": "Identifier",
                "start": 890,
                "end": 894,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 895,
                  "end": 916,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 895,
                    "end": 907,
                    "expression": {
                      "type": "Identifier",
                      "start": 895,
                      "end": 900,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 904,
                      "end": 907
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 911,
                    "end": 916,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 921,
            "end": 949,
            "expression": {
              "type": "CallExpression",
              "start": 921,
              "end": 948,
              "callee": {
                "type": "Identifier",
                "start": 921,
                "end": 925,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 926,
                  "end": 947,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 926,
                    "end": 938,
                    "expression": {
                      "type": "Identifier",
                      "start": 926,
                      "end": 931,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 935,
                      "end": 938
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 942,
                    "end": 947,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 952,
            "end": 980,
            "expression": {
              "type": "CallExpression",
              "start": 952,
              "end": 979,
              "callee": {
                "type": "Identifier",
                "start": 952,
                "end": 956,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 957,
                  "end": 978,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 957,
                    "end": 969,
                    "expression": {
                      "type": "Identifier",
                      "start": 957,
                      "end": 962,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 966,
                      "end": 969
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 973,
                    "end": 978,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 983,
            "end": 1011,
            "expression": {
              "type": "CallExpression",
              "start": 983,
              "end": 1010,
              "callee": {
                "type": "Identifier",
                "start": 983,
                "end": 987,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 988,
                  "end": 1009,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 988,
                    "end": 1000,
                    "expression": {
                      "type": "Identifier",
                      "start": 988,
                      "end": 993,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 997,
                      "end": 1000
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1004,
                    "end": 1009,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1014,
            "end": 1042,
            "expression": {
              "type": "CallExpression",
              "start": 1014,
              "end": 1041,
              "callee": {
                "type": "Identifier",
                "start": 1014,
                "end": 1018,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1019,
                  "end": 1040,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1019,
                    "end": 1031,
                    "expression": {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1024,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1028,
                      "end": 1031
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1035,
                    "end": 1040,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1045,
            "end": 1073,
            "expression": {
              "type": "CallExpression",
              "start": 1045,
              "end": 1072,
              "callee": {
                "type": "Identifier",
                "start": 1045,
                "end": 1049,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1050,
                  "end": 1071,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1050,
                    "end": 1062,
                    "expression": {
                      "type": "Identifier",
                      "start": 1050,
                      "end": 1055,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1059,
                      "end": 1062
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1066,
                    "end": 1071,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1076,
            "end": 1104,
            "expression": {
              "type": "CallExpression",
              "start": 1076,
              "end": 1103,
              "callee": {
                "type": "Identifier",
                "start": 1076,
                "end": 1080,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1081,
                  "end": 1102,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1081,
                    "end": 1093,
                    "expression": {
                      "type": "Identifier",
                      "start": 1081,
                      "end": 1086,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1090,
                      "end": 1093
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1102,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1107,
            "end": 1135,
            "expression": {
              "type": "CallExpression",
              "start": 1107,
              "end": 1134,
              "callee": {
                "type": "Identifier",
                "start": 1107,
                "end": 1111,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1112,
                  "end": 1133,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1112,
                    "end": 1124,
                    "expression": {
                      "type": "Identifier",
                      "start": 1112,
                      "end": 1117,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1121,
                      "end": 1124
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1133,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1138,
            "end": 1166,
            "expression": {
              "type": "CallExpression",
              "start": 1138,
              "end": 1165,
              "callee": {
                "type": "Identifier",
                "start": 1138,
                "end": 1142,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1143,
                  "end": 1164,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1143,
                    "end": 1155,
                    "expression": {
                      "type": "Identifier",
                      "start": 1143,
                      "end": 1148,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1152,
                      "end": 1155
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1159,
                    "end": 1164,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1169,
            "end": 1197,
            "expression": {
              "type": "CallExpression",
              "start": 1169,
              "end": 1196,
              "callee": {
                "type": "Identifier",
                "start": 1169,
                "end": 1173,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1174,
                  "end": 1195,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1174,
                    "end": 1186,
                    "expression": {
                      "type": "Identifier",
                      "start": 1174,
                      "end": 1179,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1183,
                      "end": 1186
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1190,
                    "end": 1195,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1200,
            "end": 1228,
            "expression": {
              "type": "CallExpression",
              "start": 1200,
              "end": 1227,
              "callee": {
                "type": "Identifier",
                "start": 1200,
                "end": 1204,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1205,
                  "end": 1226,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1205,
                    "end": 1217,
                    "expression": {
                      "type": "Identifier",
                      "start": 1205,
                      "end": 1210,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1214,
                      "end": 1217
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1221,
                    "end": 1226,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1231,
            "end": 1259,
            "expression": {
              "type": "CallExpression",
              "start": 1231,
              "end": 1258,
              "callee": {
                "type": "Identifier",
                "start": 1231,
                "end": 1235,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1236,
                  "end": 1257,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1236,
                    "end": 1248,
                    "expression": {
                      "type": "Identifier",
                      "start": 1236,
                      "end": 1241,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1245,
                      "end": 1248
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1257,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1262,
            "end": 1290,
            "expression": {
              "type": "CallExpression",
              "start": 1262,
              "end": 1289,
              "callee": {
                "type": "Identifier",
                "start": 1262,
                "end": 1266,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1267,
                  "end": 1288,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1267,
                    "end": 1279,
                    "expression": {
                      "type": "Identifier",
                      "start": 1267,
                      "end": 1272,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1276,
                      "end": 1279
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1283,
                    "end": 1288,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1293,
            "end": 1321,
            "expression": {
              "type": "CallExpression",
              "start": 1293,
              "end": 1320,
              "callee": {
                "type": "Identifier",
                "start": 1293,
                "end": 1297,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1298,
                  "end": 1319,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1298,
                    "end": 1310,
                    "expression": {
                      "type": "Identifier",
                      "start": 1298,
                      "end": 1303,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1307,
                      "end": 1310
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1314,
                    "end": 1319,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1324,
            "end": 1352,
            "expression": {
              "type": "CallExpression",
              "start": 1324,
              "end": 1351,
              "callee": {
                "type": "Identifier",
                "start": 1324,
                "end": 1328,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1329,
                  "end": 1350,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1329,
                    "end": 1341,
                    "expression": {
                      "type": "Identifier",
                      "start": 1329,
                      "end": 1334,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1338,
                      "end": 1341
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1345,
                    "end": 1350,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1355,
            "end": 1383,
            "expression": {
              "type": "CallExpression",
              "start": 1355,
              "end": 1382,
              "callee": {
                "type": "Identifier",
                "start": 1355,
                "end": 1359,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1360,
                  "end": 1381,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1360,
                    "end": 1372,
                    "expression": {
                      "type": "Identifier",
                      "start": 1360,
                      "end": 1365,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1369,
                      "end": 1372
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1376,
                    "end": 1381,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1386,
            "end": 1414,
            "expression": {
              "type": "CallExpression",
              "start": 1386,
              "end": 1413,
              "callee": {
                "type": "Identifier",
                "start": 1386,
                "end": 1390,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1391,
                  "end": 1412,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1391,
                    "end": 1403,
                    "expression": {
                      "type": "Identifier",
                      "start": 1391,
                      "end": 1396,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1400,
                      "end": 1403
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1407,
                    "end": 1412,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1417,
            "end": 1445,
            "expression": {
              "type": "CallExpression",
              "start": 1417,
              "end": 1444,
              "callee": {
                "type": "Identifier",
                "start": 1417,
                "end": 1421,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1422,
                  "end": 1443,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1422,
                    "end": 1434,
                    "expression": {
                      "type": "Identifier",
                      "start": 1422,
                      "end": 1427,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1431,
                      "end": 1434
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1438,
                    "end": 1443,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1448,
            "end": 1476,
            "expression": {
              "type": "CallExpression",
              "start": 1448,
              "end": 1475,
              "callee": {
                "type": "Identifier",
                "start": 1448,
                "end": 1452,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1453,
                  "end": 1474,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1453,
                    "end": 1465,
                    "expression": {
                      "type": "Identifier",
                      "start": 1453,
                      "end": 1458,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1462,
                      "end": 1465
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1474,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1479,
            "end": 1507,
            "expression": {
              "type": "CallExpression",
              "start": 1479,
              "end": 1506,
              "callee": {
                "type": "Identifier",
                "start": 1479,
                "end": 1483,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1484,
                  "end": 1505,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1484,
                    "end": 1496,
                    "expression": {
                      "type": "Identifier",
                      "start": 1484,
                      "end": 1489,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1493,
                      "end": 1496
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1500,
                    "end": 1505,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1510,
            "end": 1538,
            "expression": {
              "type": "CallExpression",
              "start": 1510,
              "end": 1537,
              "callee": {
                "type": "Identifier",
                "start": 1510,
                "end": 1514,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1515,
                  "end": 1536,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1515,
                    "end": 1527,
                    "expression": {
                      "type": "Identifier",
                      "start": 1515,
                      "end": 1520,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1524,
                      "end": 1527
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1531,
                    "end": 1536,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1541,
            "end": 1569,
            "expression": {
              "type": "CallExpression",
              "start": 1541,
              "end": 1568,
              "callee": {
                "type": "Identifier",
                "start": 1541,
                "end": 1545,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1546,
                  "end": 1567,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1546,
                    "end": 1558,
                    "expression": {
                      "type": "Identifier",
                      "start": 1546,
                      "end": 1551,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1555,
                      "end": 1558
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1562,
                    "end": 1567,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1572,
            "end": 1600,
            "expression": {
              "type": "CallExpression",
              "start": 1572,
              "end": 1599,
              "callee": {
                "type": "Identifier",
                "start": 1572,
                "end": 1576,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1577,
                  "end": 1598,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1577,
                    "end": 1589,
                    "expression": {
                      "type": "Identifier",
                      "start": 1577,
                      "end": 1582,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1586,
                      "end": 1589
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1593,
                    "end": 1598,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1603,
            "end": 1631,
            "expression": {
              "type": "CallExpression",
              "start": 1603,
              "end": 1630,
              "callee": {
                "type": "Identifier",
                "start": 1603,
                "end": 1607,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1608,
                  "end": 1629,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1608,
                    "end": 1620,
                    "expression": {
                      "type": "Identifier",
                      "start": 1608,
                      "end": 1613,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1617,
                      "end": 1620
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1624,
                    "end": 1629,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1634,
            "end": 1662,
            "expression": {
              "type": "CallExpression",
              "start": 1634,
              "end": 1661,
              "callee": {
                "type": "Identifier",
                "start": 1634,
                "end": 1638,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1639,
                  "end": 1660,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1639,
                    "end": 1651,
                    "expression": {
                      "type": "Identifier",
                      "start": 1639,
                      "end": 1644,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1648,
                      "end": 1651
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1655,
                    "end": 1660,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1665,
            "end": 1693,
            "expression": {
              "type": "CallExpression",
              "start": 1665,
              "end": 1692,
              "callee": {
                "type": "Identifier",
                "start": 1665,
                "end": 1669,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1670,
                  "end": 1691,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1670,
                    "end": 1682,
                    "expression": {
                      "type": "Identifier",
                      "start": 1670,
                      "end": 1675,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1679,
                      "end": 1682
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1686,
                    "end": 1691,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1696,
            "end": 1724,
            "expression": {
              "type": "CallExpression",
              "start": 1696,
              "end": 1723,
              "callee": {
                "type": "Identifier",
                "start": 1696,
                "end": 1700,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1701,
                  "end": 1722,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1701,
                    "end": 1713,
                    "expression": {
                      "type": "Identifier",
                      "start": 1701,
                      "end": 1706,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1710,
                      "end": 1713
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1717,
                    "end": 1722,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1727,
            "end": 1755,
            "expression": {
              "type": "CallExpression",
              "start": 1727,
              "end": 1754,
              "callee": {
                "type": "Identifier",
                "start": 1727,
                "end": 1731,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1732,
                  "end": 1753,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1732,
                    "end": 1744,
                    "expression": {
                      "type": "Identifier",
                      "start": 1732,
                      "end": 1737,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1741,
                      "end": 1744
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1748,
                    "end": 1753,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1758,
            "end": 1786,
            "expression": {
              "type": "CallExpression",
              "start": 1758,
              "end": 1785,
              "callee": {
                "type": "Identifier",
                "start": 1758,
                "end": 1762,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1763,
                  "end": 1784,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1763,
                    "end": 1775,
                    "expression": {
                      "type": "Identifier",
                      "start": 1763,
                      "end": 1768,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1772,
                      "end": 1775
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1779,
                    "end": 1784,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1789,
            "end": 1817,
            "expression": {
              "type": "CallExpression",
              "start": 1789,
              "end": 1816,
              "callee": {
                "type": "Identifier",
                "start": 1789,
                "end": 1793,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "start": 1794,
                  "end": 1815,
                  "left": {
                    "type": "TSAsExpression",
                    "start": 1794,
                    "end": 1806,
                    "expression": {
                      "type": "Identifier",
                      "start": 1794,
                      "end": 1799,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1803,
                      "end": 1806
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1810,
                    "end": 1815,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
