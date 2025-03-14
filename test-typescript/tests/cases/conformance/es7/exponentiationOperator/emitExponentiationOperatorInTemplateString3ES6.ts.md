__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 896,
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
            "start": 76,
            "end": 84,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 76,
              "end": 78,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 82,
              "end": 84,
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
            "end": 76,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 84,
            "end": 92,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 97,
            "end": 111,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 103,
              "end": 111,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 105,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 109,
                "end": 111,
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
            "end": 97,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 111,
            "end": 119,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 124,
            "end": 137,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 124,
              "end": 126,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 129,
              "end": 137,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 129,
                "end": 131,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 135,
                "end": 137,
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
            "end": 124,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 137,
            "end": 145,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 150,
            "end": 163,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 150,
              "end": 158,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 150,
                "end": 152,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 156,
                "end": 158,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 161,
              "end": 163,
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
            "end": 150,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 163,
            "end": 171,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 176,
            "end": 194,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 176,
              "end": 189,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 176,
                "end": 178,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 181,
                "end": 189,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 183,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 189,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 192,
              "end": 194,
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
            "end": 176,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 195,
            "end": 203,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 208,
            "end": 231,
            "argument": {
              "type": "BinaryExpression",
              "start": 216,
              "end": 230,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 216,
                "end": 218,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 222,
                "end": 230,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 224,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 230,
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
            "end": 208,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 232,
            "end": 240,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 245,
            "end": 272,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 245,
              "end": 246,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UnaryExpression",
              "start": 249,
              "end": 272,
              "argument": {
                "type": "BinaryExpression",
                "start": 257,
                "end": 271,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 259,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 263,
                  "end": 271,
                  "operator": "**",
                  "left": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 265,
                    "decorators": [],
                    "name": "t2",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 271,
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
            "end": 245,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 273,
            "end": 281,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 287,
            "end": 295,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 287,
              "end": 289,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 293,
              "end": 295,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 298,
            "end": 306,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 298,
              "end": 300,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 304,
              "end": 306,
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
            "end": 287,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 295,
            "end": 298,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 306,
            "end": 314,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 319,
            "end": 333,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 319,
              "end": 321,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 325,
              "end": 333,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 325,
                "end": 327,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 336,
            "end": 350,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 336,
              "end": 338,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 342,
              "end": 350,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 342,
                "end": 344,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 348,
                "end": 350,
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
            "end": 319,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 333,
            "end": 336,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 350,
            "end": 358,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 363,
            "end": 376,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 363,
              "end": 365,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 368,
              "end": 376,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 368,
                "end": 370,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 374,
                "end": 376,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 379,
            "end": 392,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 379,
              "end": 381,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 384,
              "end": 392,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 384,
                "end": 386,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 390,
                "end": 392,
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
            "end": 363,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 376,
            "end": 379,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 392,
            "end": 400,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 405,
            "end": 418,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 405,
              "end": 413,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 405,
                "end": 407,
                "decorators": [],
                "name": "t1",
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
            "end": 434,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 421,
              "end": 429,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 421,
                "end": 423,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 427,
                "end": 429,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 432,
              "end": 434,
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
            "end": 405,
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
            "start": 434,
            "end": 442,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 447,
            "end": 465,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 447,
              "end": 460,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 447,
                "end": 449,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 452,
                "end": 460,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 454,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 460,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 463,
              "end": 465,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 468,
            "end": 486,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 468,
              "end": 481,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 468,
                "end": 470,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 473,
                "end": 481,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 475,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 481,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 484,
              "end": 486,
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
            "end": 447,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 465,
            "end": 468,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 486,
            "end": 494,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
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
            "start": 499,
            "end": 522,
            "argument": {
              "type": "BinaryExpression",
              "start": 507,
              "end": 521,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 507,
                "end": 509,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 513,
                "end": 521,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 515,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 521,
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
            "start": 526,
            "end": 549,
            "argument": {
              "type": "BinaryExpression",
              "start": 534,
              "end": 548,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 534,
                "end": 536,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 540,
                "end": 548,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 542,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
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
            "end": 499,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 523,
            "end": 526,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 550,
            "end": 558,
            "tail": true,
            "value": {
              "cooked": " world",
              "raw": " world"
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 561,
      "end": 602,
      "expression": {
        "type": "TemplateLiteral",
        "start": 561,
        "end": 601,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 564,
            "end": 572,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 564,
              "end": 566,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 570,
              "end": 572,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 588,
            "end": 596,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 588,
              "end": 590,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 594,
              "end": 596,
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
            "end": 564,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 572,
            "end": 588,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 596,
            "end": 601,
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 603,
      "end": 656,
      "expression": {
        "type": "TemplateLiteral",
        "start": 603,
        "end": 655,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 606,
            "end": 620,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 606,
              "end": 608,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 612,
              "end": 620,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 612,
                "end": 614,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 618,
                "end": 620,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 636,
            "end": 650,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 636,
              "end": 638,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 642,
              "end": 650,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 642,
                "end": 644,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 648,
                "end": 650,
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
            "start": 603,
            "end": 606,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 620,
            "end": 636,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 650,
            "end": 655,
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 657,
      "end": 708,
      "expression": {
        "type": "TemplateLiteral",
        "start": 657,
        "end": 707,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 660,
            "end": 673,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 660,
              "end": 662,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 665,
              "end": 673,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 665,
                "end": 667,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 671,
                "end": 673,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 689,
            "end": 702,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 689,
              "end": 691,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 694,
              "end": 702,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 694,
                "end": 696,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 700,
                "end": 702,
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
            "start": 657,
            "end": 660,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 673,
            "end": 689,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 702,
            "end": 707,
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 760,
      "expression": {
        "type": "TemplateLiteral",
        "start": 709,
        "end": 759,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 712,
            "end": 725,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 712,
              "end": 720,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 712,
                "end": 714,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 718,
                "end": 720,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 723,
              "end": 725,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 741,
            "end": 754,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 741,
              "end": 749,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 741,
                "end": 743,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 747,
                "end": 749,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 752,
              "end": 754,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 709,
            "end": 712,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 725,
            "end": 741,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 754,
            "end": 759,
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 761,
      "end": 822,
      "expression": {
        "type": "TemplateLiteral",
        "start": 761,
        "end": 821,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 764,
            "end": 782,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 764,
              "end": 777,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 764,
                "end": 766,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 769,
                "end": 777,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 771,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 777,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 780,
              "end": 782,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 798,
            "end": 816,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 798,
              "end": 811,
              "operator": "+",
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
                "start": 803,
                "end": 811,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 803,
                  "end": 805,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 811,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 814,
              "end": 816,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 761,
            "end": 764,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 782,
            "end": 798,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 816,
            "end": 821,
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 823,
      "end": 895,
      "expression": {
        "type": "TemplateLiteral",
        "start": 823,
        "end": 894,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 826,
            "end": 849,
            "argument": {
              "type": "BinaryExpression",
              "start": 834,
              "end": 848,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 834,
                "end": 836,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 840,
                "end": 848,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 842,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 848,
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
            "start": 866,
            "end": 889,
            "argument": {
              "type": "BinaryExpression",
              "start": 874,
              "end": 888,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 874,
                "end": 876,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 880,
                "end": 888,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 882,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 888,
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
            "start": 823,
            "end": 826,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 850,
            "end": 866,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 889,
            "end": 894,
            "tail": true,
            "value": {
              "cooked": " !!",
              "raw": " !!"
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
