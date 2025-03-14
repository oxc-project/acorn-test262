__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 817,
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
      "start": 92,
      "end": 106,
      "expression": {
        "type": "TemplateLiteral",
        "start": 92,
        "end": 105,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 95,
            "end": 103,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 95,
              "end": 97,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 101,
              "end": 103,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 92,
            "end": 95,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 103,
            "end": 105,
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
      "start": 107,
      "end": 127,
      "expression": {
        "type": "TemplateLiteral",
        "start": 107,
        "end": 126,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 110,
            "end": 124,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 110,
              "end": 112,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 116,
              "end": 124,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 116,
                "end": 118,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 122,
                "end": 124,
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
            "start": 107,
            "end": 110,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 124,
            "end": 126,
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
      "start": 128,
      "end": 147,
      "expression": {
        "type": "TemplateLiteral",
        "start": 128,
        "end": 146,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 131,
            "end": 144,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 136,
              "end": 144,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 142,
                "end": 144,
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
            "start": 128,
            "end": 131,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 144,
            "end": 146,
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
      "start": 148,
      "end": 167,
      "expression": {
        "type": "TemplateLiteral",
        "start": 148,
        "end": 166,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 151,
            "end": 164,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 151,
              "end": 159,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 151,
                "end": 153,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 157,
                "end": 159,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 162,
              "end": 164,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 148,
            "end": 151,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 164,
            "end": 166,
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
      "start": 168,
      "end": 193,
      "expression": {
        "type": "TemplateLiteral",
        "start": 168,
        "end": 192,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 171,
            "end": 189,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 171,
              "end": 184,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 171,
                "end": 173,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 176,
                "end": 184,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 178,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 184,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 187,
              "end": 189,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 168,
            "end": 171,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 190,
            "end": 192,
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
      "start": 194,
      "end": 224,
      "expression": {
        "type": "TemplateLiteral",
        "start": 194,
        "end": 223,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 197,
            "end": 220,
            "argument": {
              "type": "BinaryExpression",
              "start": 205,
              "end": 219,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 205,
                "end": 207,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 211,
                "end": 219,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 213,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 219,
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
            "start": 194,
            "end": 197,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 221,
            "end": 223,
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
      "start": 225,
      "end": 259,
      "expression": {
        "type": "TemplateLiteral",
        "start": 225,
        "end": 258,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 228,
            "end": 255,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 228,
              "end": 229,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UnaryExpression",
              "start": 232,
              "end": 255,
              "argument": {
                "type": "BinaryExpression",
                "start": 240,
                "end": 254,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 246,
                  "end": 254,
                  "operator": "**",
                  "left": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 248,
                    "decorators": [],
                    "name": "t2",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 254,
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
            "start": 225,
            "end": 228,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 256,
            "end": 258,
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
      "start": 261,
      "end": 286,
      "expression": {
        "type": "TemplateLiteral",
        "start": 261,
        "end": 285,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 264,
            "end": 272,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 264,
              "end": 266,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 270,
              "end": 272,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 275,
            "end": 283,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 275,
              "end": 277,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 281,
              "end": 283,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 261,
            "end": 264,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 272,
            "end": 275,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 283,
            "end": 285,
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
      "start": 287,
      "end": 324,
      "expression": {
        "type": "TemplateLiteral",
        "start": 287,
        "end": 323,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 290,
            "end": 304,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 290,
              "end": 292,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 296,
              "end": 304,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 296,
                "end": 298,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 302,
                "end": 304,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 307,
            "end": 321,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 307,
              "end": 309,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 313,
              "end": 321,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 313,
                "end": 315,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 319,
                "end": 321,
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
            "start": 287,
            "end": 290,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 304,
            "end": 307,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 321,
            "end": 323,
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
      "start": 325,
      "end": 360,
      "expression": {
        "type": "TemplateLiteral",
        "start": 325,
        "end": 359,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 328,
            "end": 341,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 328,
              "end": 330,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 333,
              "end": 341,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 333,
                "end": 335,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 339,
                "end": 341,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 344,
            "end": 357,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 344,
              "end": 346,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 349,
              "end": 357,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 349,
                "end": 351,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 355,
                "end": 357,
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
            "start": 325,
            "end": 328,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 341,
            "end": 344,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 357,
            "end": 359,
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
      "start": 361,
      "end": 396,
      "expression": {
        "type": "TemplateLiteral",
        "start": 361,
        "end": 395,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 364,
            "end": 377,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 364,
              "end": 372,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 364,
                "end": 366,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 370,
                "end": 372,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 375,
              "end": 377,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 380,
            "end": 393,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 380,
              "end": 388,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 380,
                "end": 382,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 386,
                "end": 388,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 391,
              "end": 393,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 361,
            "end": 364,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 377,
            "end": 380,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 393,
            "end": 395,
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
      "start": 397,
      "end": 442,
      "expression": {
        "type": "TemplateLiteral",
        "start": 397,
        "end": 441,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 400,
            "end": 418,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 400,
              "end": 413,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 400,
                "end": 402,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 405,
                "end": 413,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 407,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 413,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 416,
              "end": 418,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 421,
            "end": 439,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 421,
              "end": 434,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 421,
                "end": 423,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 426,
                "end": 434,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 428,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 434,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 437,
              "end": 439,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 397,
            "end": 400,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 418,
            "end": 421,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 439,
            "end": 441,
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
      "start": 443,
      "end": 498,
      "expression": {
        "type": "TemplateLiteral",
        "start": 443,
        "end": 497,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 446,
            "end": 469,
            "argument": {
              "type": "BinaryExpression",
              "start": 454,
              "end": 468,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 454,
                "end": 456,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 460,
                "end": 468,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 462,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 468,
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
            "start": 472,
            "end": 495,
            "argument": {
              "type": "BinaryExpression",
              "start": 480,
              "end": 494,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 480,
                "end": 482,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 486,
                "end": 494,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 488,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 494,
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
            "start": 443,
            "end": 446,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 469,
            "end": 472,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 495,
            "end": 497,
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
      "start": 500,
      "end": 538,
      "expression": {
        "type": "TemplateLiteral",
        "start": 500,
        "end": 537,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 503,
            "end": 511,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 503,
              "end": 505,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 509,
              "end": 511,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 527,
            "end": 535,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 527,
              "end": 529,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 533,
              "end": 535,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 500,
            "end": 503,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 511,
            "end": 527,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 535,
            "end": 537,
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
      "start": 539,
      "end": 589,
      "expression": {
        "type": "TemplateLiteral",
        "start": 539,
        "end": 588,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 542,
            "end": 556,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 542,
              "end": 544,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 548,
              "end": 556,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 548,
                "end": 550,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 554,
                "end": 556,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 572,
            "end": 586,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 572,
              "end": 574,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 578,
              "end": 586,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 578,
                "end": 580,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 584,
                "end": 586,
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
            "start": 539,
            "end": 542,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 556,
            "end": 572,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 586,
            "end": 588,
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
      "start": 590,
      "end": 638,
      "expression": {
        "type": "TemplateLiteral",
        "start": 590,
        "end": 637,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 593,
            "end": 606,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 593,
              "end": 595,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 598,
              "end": 606,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 598,
                "end": 600,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 604,
                "end": 606,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 622,
            "end": 635,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 622,
              "end": 624,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 627,
              "end": 635,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 627,
                "end": 629,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 633,
                "end": 635,
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
            "start": 590,
            "end": 593,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 606,
            "end": 622,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 635,
            "end": 637,
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
      "start": 639,
      "end": 687,
      "expression": {
        "type": "TemplateLiteral",
        "start": 639,
        "end": 686,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 642,
            "end": 655,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 642,
              "end": 650,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 642,
                "end": 644,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 648,
                "end": 650,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 653,
              "end": 655,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 671,
            "end": 684,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 671,
              "end": 679,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 671,
                "end": 673,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 677,
                "end": 679,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 682,
              "end": 684,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 639,
            "end": 642,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 655,
            "end": 671,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 684,
            "end": 686,
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
      "start": 688,
      "end": 746,
      "expression": {
        "type": "TemplateLiteral",
        "start": 688,
        "end": 745,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 691,
            "end": 709,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 691,
              "end": 704,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 691,
                "end": 693,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 696,
                "end": 704,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 698,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 704,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 707,
              "end": 709,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 725,
            "end": 743,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 725,
              "end": 738,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 725,
                "end": 727,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 730,
                "end": 738,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 732,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 738,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 741,
              "end": 743,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 688,
            "end": 691,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 709,
            "end": 725,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 743,
            "end": 745,
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
      "start": 747,
      "end": 817,
      "expression": {
        "type": "TemplateLiteral",
        "start": 747,
        "end": 816,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 750,
            "end": 773,
            "argument": {
              "type": "BinaryExpression",
              "start": 758,
              "end": 772,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 758,
                "end": 760,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 764,
                "end": 772,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 764,
                  "end": 766,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 772,
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
            "start": 790,
            "end": 813,
            "argument": {
              "type": "BinaryExpression",
              "start": 798,
              "end": 812,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 798,
                "end": 800,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 804,
                "end": 812,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 806,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 812,
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
            "start": 747,
            "end": 750,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 774,
            "end": 790,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 814,
            "end": 816,
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
  "sourceType": "script",
  "hashbang": null
}
```
