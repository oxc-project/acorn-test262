emitExponentiationOperatorInTemplateString2.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 914,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "decorators": [],
            "name": "t1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 27,
            "end": 29,
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
      "start": 31,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "decorators": [],
            "name": "t2",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 40,
            "end": 42,
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
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 93,
      "expression": {
        "type": "TemplateLiteral",
        "start": 73,
        "end": 92,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 82,
            "end": 90,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 82,
              "end": 84,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 88,
              "end": 90,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 73,
            "end": 82,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 90,
            "end": 92,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 120,
      "expression": {
        "type": "TemplateLiteral",
        "start": 94,
        "end": 119,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 103,
            "end": 117,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 103,
              "end": 105,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 117,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 111,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 115,
                "end": 117,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 94,
            "end": 103,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 117,
            "end": 119,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 146,
      "expression": {
        "type": "TemplateLiteral",
        "start": 121,
        "end": 145,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 130,
            "end": 143,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 130,
              "end": 132,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 135,
              "end": 143,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 135,
                "end": 137,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 141,
                "end": 143,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 121,
            "end": 130,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 143,
            "end": 145,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 172,
      "expression": {
        "type": "TemplateLiteral",
        "start": 147,
        "end": 171,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 156,
            "end": 169,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 156,
              "end": 164,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 156,
                "end": 158,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 162,
                "end": 164,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 147,
            "end": 156,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 169,
            "end": 171,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 204,
      "expression": {
        "type": "TemplateLiteral",
        "start": 173,
        "end": 203,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 182,
            "end": 200,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 182,
              "end": 195,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 182,
                "end": 184,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 187,
                "end": 195,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 189,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 195,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 198,
              "end": 200,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 173,
            "end": 182,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 201,
            "end": 203,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 241,
      "expression": {
        "type": "TemplateLiteral",
        "start": 205,
        "end": 240,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 214,
            "end": 237,
            "argument": {
              "type": "BinaryExpression",
              "start": 222,
              "end": 236,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 222,
                "end": 224,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 228,
                "end": 236,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 230,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 236,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                }
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 205,
            "end": 214,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 238,
            "end": 240,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 282,
      "expression": {
        "type": "TemplateLiteral",
        "start": 242,
        "end": 281,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 251,
            "end": 278,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 251,
              "end": 252,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UnaryExpression",
              "start": 255,
              "end": 278,
              "argument": {
                "type": "BinaryExpression",
                "start": 263,
                "end": 277,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 265,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 269,
                  "end": 277,
                  "operator": "**",
                  "left": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 271,
                    "decorators": [],
                    "name": "t2",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 277,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  }
                }
              },
              "operator": "typeof",
              "prefix": true
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 242,
            "end": 251,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 279,
            "end": 281,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 284,
      "end": 315,
      "expression": {
        "type": "TemplateLiteral",
        "start": 284,
        "end": 314,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 293,
            "end": 301,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 293,
              "end": 295,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 299,
              "end": 301,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 304,
            "end": 312,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 304,
              "end": 306,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 310,
              "end": 312,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 284,
            "end": 293,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 301,
            "end": 304,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 312,
            "end": 314,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 359,
      "expression": {
        "type": "TemplateLiteral",
        "start": 316,
        "end": 358,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 325,
            "end": 339,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 325,
              "end": 327,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 331,
              "end": 339,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 337,
                "end": 339,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 342,
            "end": 356,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 342,
              "end": 344,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 348,
              "end": 356,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 348,
                "end": 350,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 354,
                "end": 356,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 316,
            "end": 325,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 339,
            "end": 342,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 356,
            "end": 358,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 360,
      "end": 401,
      "expression": {
        "type": "TemplateLiteral",
        "start": 360,
        "end": 400,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 369,
            "end": 382,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 369,
              "end": 371,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 374,
              "end": 382,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 374,
                "end": 376,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 380,
                "end": 382,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 385,
            "end": 398,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 385,
              "end": 387,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 398,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 390,
                "end": 392,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 396,
                "end": 398,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 360,
            "end": 369,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 382,
            "end": 385,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 398,
            "end": 400,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 443,
      "expression": {
        "type": "TemplateLiteral",
        "start": 402,
        "end": 442,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 411,
            "end": 424,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 411,
              "end": 419,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 411,
                "end": 413,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 417,
                "end": 419,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 422,
              "end": 424,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 427,
            "end": 440,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 427,
              "end": 435,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 427,
                "end": 429,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 433,
                "end": 435,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 438,
              "end": 440,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 402,
            "end": 411,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 424,
            "end": 427,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 440,
            "end": 442,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 495,
      "expression": {
        "type": "TemplateLiteral",
        "start": 444,
        "end": 494,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 453,
            "end": 471,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 453,
              "end": 466,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 453,
                "end": 455,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 458,
                "end": 466,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 460,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 466,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 469,
              "end": 471,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 474,
            "end": 492,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 474,
              "end": 487,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 474,
                "end": 476,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 479,
                "end": 487,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 481,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 487,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 490,
              "end": 492,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 444,
            "end": 453,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 471,
            "end": 474,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 492,
            "end": 494,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 496,
      "end": 559,
      "expression": {
        "type": "TemplateLiteral",
        "start": 496,
        "end": 558,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 505,
            "end": 528,
            "argument": {
              "type": "BinaryExpression",
              "start": 513,
              "end": 527,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 513,
                "end": 515,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 519,
                "end": 527,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 521,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 527,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                }
              }
            },
            "operator": "typeof",
            "prefix": true
          },
          {
            "type": "UnaryExpression",
            "start": 532,
            "end": 555,
            "argument": {
              "type": "BinaryExpression",
              "start": 540,
              "end": 554,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 540,
                "end": 542,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 546,
                "end": 554,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 554,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                }
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 496,
            "end": 505,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 529,
            "end": 532,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 556,
            "end": 558,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 561,
      "end": 605,
      "expression": {
        "type": "TemplateLiteral",
        "start": 561,
        "end": 604,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 570,
            "end": 578,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 570,
              "end": 572,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 576,
              "end": 578,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 594,
            "end": 602,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 594,
              "end": 596,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 600,
              "end": 602,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 561,
            "end": 570,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 578,
            "end": 594,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 602,
            "end": 604,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 606,
      "end": 662,
      "expression": {
        "type": "TemplateLiteral",
        "start": 606,
        "end": 661,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 615,
            "end": 629,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 615,
              "end": 617,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 621,
              "end": 629,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 621,
                "end": 623,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 627,
                "end": 629,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 645,
            "end": 659,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 645,
              "end": 647,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 651,
              "end": 659,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 651,
                "end": 653,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 657,
                "end": 659,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 606,
            "end": 615,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 629,
            "end": 645,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 659,
            "end": 661,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 663,
      "end": 717,
      "expression": {
        "type": "TemplateLiteral",
        "start": 663,
        "end": 716,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 672,
            "end": 685,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 672,
              "end": 674,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 677,
              "end": 685,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 677,
                "end": 679,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 683,
                "end": 685,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 701,
            "end": 714,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 701,
              "end": 703,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 706,
              "end": 714,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 706,
                "end": 708,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 712,
                "end": 714,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 663,
            "end": 672,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 685,
            "end": 701,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 714,
            "end": 716,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 718,
      "end": 772,
      "expression": {
        "type": "TemplateLiteral",
        "start": 718,
        "end": 771,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 727,
            "end": 740,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 727,
              "end": 735,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 727,
                "end": 729,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 733,
                "end": 735,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 738,
              "end": 740,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 756,
            "end": 769,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 756,
              "end": 764,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 756,
                "end": 758,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 762,
                "end": 764,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 767,
              "end": 769,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 718,
            "end": 727,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 740,
            "end": 756,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 769,
            "end": 771,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 773,
      "end": 837,
      "expression": {
        "type": "TemplateLiteral",
        "start": 773,
        "end": 836,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 782,
            "end": 800,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 782,
              "end": 795,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 782,
                "end": 784,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 787,
                "end": 795,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 789,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 795,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 798,
              "end": 800,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 816,
            "end": 834,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 816,
              "end": 829,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 816,
                "end": 818,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 821,
                "end": 829,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 823,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 829,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 832,
              "end": 834,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 773,
            "end": 782,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 800,
            "end": 816,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 834,
            "end": 836,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 838,
      "end": 914,
      "expression": {
        "type": "TemplateLiteral",
        "start": 838,
        "end": 913,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 847,
            "end": 870,
            "argument": {
              "type": "BinaryExpression",
              "start": 855,
              "end": 869,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 855,
                "end": 857,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 861,
                "end": 869,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 861,
                  "end": 863,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 867,
                  "end": 869,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                }
              }
            },
            "operator": "typeof",
            "prefix": true
          },
          {
            "type": "UnaryExpression",
            "start": 887,
            "end": 910,
            "argument": {
              "type": "BinaryExpression",
              "start": 895,
              "end": 909,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 895,
                "end": 897,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 901,
                "end": 909,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 901,
                  "end": 903,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 909,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                }
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 838,
            "end": 847,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 871,
            "end": 887,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 911,
            "end": 913,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
