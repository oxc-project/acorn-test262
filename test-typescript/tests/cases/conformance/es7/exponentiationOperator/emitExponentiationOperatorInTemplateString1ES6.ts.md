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
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 27,
            "end": 29,
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
      "start": 31,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 40,
            "end": 42,
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
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "s",
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
            "left": {
              "type": "Identifier",
              "start": 95,
              "end": 97,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 101,
              "end": 103,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 92,
            "end": 95,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 103,
            "end": 105,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 110,
              "end": 112,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 116,
              "end": 124,
              "left": {
                "type": "Identifier",
                "start": 116,
                "end": 118,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 122,
                "end": 124,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
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
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 124,
            "end": 126,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 136,
              "end": 144,
              "left": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 142,
                "end": 144,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
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
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 144,
            "end": 146,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 151,
              "end": 159,
              "left": {
                "type": "Identifier",
                "start": 151,
                "end": 153,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 157,
                "end": 159,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 162,
              "end": 164,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 148,
            "end": 151,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 164,
            "end": 166,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 171,
              "end": 184,
              "left": {
                "type": "Identifier",
                "start": 171,
                "end": 173,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 176,
                "end": 184,
                "left": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 178,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 184,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 187,
              "end": 189,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 168,
            "end": 171,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 190,
            "end": 192,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 205,
              "end": 219,
              "left": {
                "type": "Identifier",
                "start": 205,
                "end": 207,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 211,
                "end": 219,
                "left": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 213,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 219,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 194,
            "end": 197,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 221,
            "end": 223,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Literal",
              "start": 228,
              "end": 229,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "UnaryExpression",
              "start": 232,
              "end": 255,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "BinaryExpression",
                "start": 240,
                "end": 254,
                "left": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "BinaryExpression",
                  "start": 246,
                  "end": 254,
                  "left": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 248,
                    "name": "t2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 254,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 225,
            "end": 228,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 256,
            "end": 258,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 264,
              "end": 266,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 270,
              "end": 272,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 275,
            "end": 283,
            "left": {
              "type": "Identifier",
              "start": 275,
              "end": 277,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 281,
              "end": 283,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 261,
            "end": 264,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 272,
            "end": 275,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 283,
            "end": 285,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 290,
              "end": 292,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 296,
              "end": 304,
              "left": {
                "type": "Identifier",
                "start": 296,
                "end": 298,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 302,
                "end": 304,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 307,
            "end": 321,
            "left": {
              "type": "Identifier",
              "start": 307,
              "end": 309,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 313,
              "end": 321,
              "left": {
                "type": "Identifier",
                "start": 313,
                "end": 315,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 319,
                "end": 321,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
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
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 304,
            "end": 307,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 321,
            "end": 323,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 328,
              "end": 330,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 333,
              "end": 341,
              "left": {
                "type": "Identifier",
                "start": 333,
                "end": 335,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 339,
                "end": 341,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 344,
            "end": 357,
            "left": {
              "type": "Identifier",
              "start": 344,
              "end": 346,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 349,
              "end": 357,
              "left": {
                "type": "Identifier",
                "start": 349,
                "end": 351,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 355,
                "end": 357,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
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
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 341,
            "end": 344,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 357,
            "end": 359,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 364,
              "end": 372,
              "left": {
                "type": "Identifier",
                "start": 364,
                "end": 366,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 370,
                "end": 372,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 375,
              "end": 377,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 380,
            "end": 393,
            "left": {
              "type": "BinaryExpression",
              "start": 380,
              "end": 388,
              "left": {
                "type": "Identifier",
                "start": 380,
                "end": 382,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 386,
                "end": 388,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 391,
              "end": 393,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 361,
            "end": 364,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 377,
            "end": 380,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 393,
            "end": 395,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 400,
              "end": 413,
              "left": {
                "type": "Identifier",
                "start": 400,
                "end": 402,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 405,
                "end": 413,
                "left": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 407,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 413,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 416,
              "end": 418,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 421,
            "end": 439,
            "left": {
              "type": "BinaryExpression",
              "start": 421,
              "end": 434,
              "left": {
                "type": "Identifier",
                "start": 421,
                "end": 423,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 426,
                "end": 434,
                "left": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 428,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 434,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 437,
              "end": 439,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 397,
            "end": 400,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 418,
            "end": 421,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 439,
            "end": 441,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 454,
              "end": 468,
              "left": {
                "type": "Identifier",
                "start": 454,
                "end": 456,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 460,
                "end": 468,
                "left": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 462,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 468,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          },
          {
            "type": "UnaryExpression",
            "start": 472,
            "end": 495,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 480,
              "end": 494,
              "left": {
                "type": "Identifier",
                "start": 480,
                "end": 482,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 486,
                "end": 494,
                "left": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 488,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 494,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 443,
            "end": 446,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 469,
            "end": 472,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 495,
            "end": 497,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 503,
              "end": 505,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 509,
              "end": 511,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 527,
            "end": 535,
            "left": {
              "type": "Identifier",
              "start": 527,
              "end": 529,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 533,
              "end": 535,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 500,
            "end": 503,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 511,
            "end": 527,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 535,
            "end": 537,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 542,
              "end": 544,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 548,
              "end": 556,
              "left": {
                "type": "Identifier",
                "start": 548,
                "end": 550,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 554,
                "end": 556,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 572,
            "end": 586,
            "left": {
              "type": "Identifier",
              "start": 572,
              "end": 574,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 578,
              "end": 586,
              "left": {
                "type": "Identifier",
                "start": 578,
                "end": 580,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 584,
                "end": 586,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
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
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 556,
            "end": 572,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 586,
            "end": 588,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 593,
              "end": 595,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 598,
              "end": 606,
              "left": {
                "type": "Identifier",
                "start": 598,
                "end": 600,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 604,
                "end": 606,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 622,
            "end": 635,
            "left": {
              "type": "Identifier",
              "start": 622,
              "end": 624,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 627,
              "end": 635,
              "left": {
                "type": "Identifier",
                "start": 627,
                "end": 629,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 633,
                "end": 635,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
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
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 606,
            "end": 622,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 635,
            "end": 637,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 642,
              "end": 650,
              "left": {
                "type": "Identifier",
                "start": 642,
                "end": 644,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 648,
                "end": 650,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 653,
              "end": 655,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 671,
            "end": 684,
            "left": {
              "type": "BinaryExpression",
              "start": 671,
              "end": 679,
              "left": {
                "type": "Identifier",
                "start": 671,
                "end": 673,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 677,
                "end": 679,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 682,
              "end": 684,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 639,
            "end": 642,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 655,
            "end": 671,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 684,
            "end": 686,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 691,
              "end": 704,
              "left": {
                "type": "Identifier",
                "start": 691,
                "end": 693,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 696,
                "end": 704,
                "left": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 698,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 704,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 707,
              "end": 709,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 725,
            "end": 743,
            "left": {
              "type": "BinaryExpression",
              "start": 725,
              "end": 738,
              "left": {
                "type": "Identifier",
                "start": 725,
                "end": 727,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 730,
                "end": 738,
                "left": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 732,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 738,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 741,
              "end": 743,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 688,
            "end": 691,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 709,
            "end": 725,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 743,
            "end": 745,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 758,
              "end": 772,
              "left": {
                "type": "Identifier",
                "start": 758,
                "end": 760,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 764,
                "end": 772,
                "left": {
                  "type": "Identifier",
                  "start": 764,
                  "end": 766,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 772,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          },
          {
            "type": "UnaryExpression",
            "start": 790,
            "end": 813,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 798,
              "end": 812,
              "left": {
                "type": "Identifier",
                "start": 798,
                "end": 800,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 804,
                "end": 812,
                "left": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 806,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 812,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 747,
            "end": 750,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 774,
            "end": 790,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 814,
            "end": 816,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
