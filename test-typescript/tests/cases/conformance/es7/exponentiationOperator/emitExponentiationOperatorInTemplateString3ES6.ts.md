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
            "left": {
              "type": "Identifier",
              "start": 76,
              "end": 78,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 82,
              "end": 84,
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
            "start": 73,
            "end": 76,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 84,
            "end": 92,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 103,
              "end": 111,
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 105,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 109,
                "end": 111,
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
            "start": 94,
            "end": 97,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 111,
            "end": 119,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 124,
              "end": 126,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 129,
              "end": 137,
              "left": {
                "type": "Identifier",
                "start": 129,
                "end": 131,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 135,
                "end": 137,
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
            "start": 121,
            "end": 124,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 137,
            "end": 145,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 150,
              "end": 158,
              "left": {
                "type": "Identifier",
                "start": 150,
                "end": 152,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 156,
                "end": 158,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 161,
              "end": 163,
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
            "start": 147,
            "end": 150,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 163,
            "end": 171,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 176,
              "end": 189,
              "left": {
                "type": "Identifier",
                "start": 176,
                "end": 178,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 181,
                "end": 189,
                "left": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 183,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 189,
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
              "start": 192,
              "end": 194,
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
            "start": 173,
            "end": 176,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 195,
            "end": 203,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 216,
              "end": 230,
              "left": {
                "type": "Identifier",
                "start": 216,
                "end": 218,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 222,
                "end": 230,
                "left": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 224,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 230,
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
            "start": 205,
            "end": 208,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 232,
            "end": 240,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Literal",
              "start": 245,
              "end": 246,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "UnaryExpression",
              "start": 249,
              "end": 272,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "BinaryExpression",
                "start": 257,
                "end": 271,
                "left": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 259,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "BinaryExpression",
                  "start": 263,
                  "end": 271,
                  "left": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 265,
                    "name": "t2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 271,
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
            "start": 242,
            "end": 245,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 273,
            "end": 281,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 287,
              "end": 289,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 293,
              "end": 295,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 298,
            "end": 306,
            "left": {
              "type": "Identifier",
              "start": 298,
              "end": 300,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 304,
              "end": 306,
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
            "start": 284,
            "end": 287,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 295,
            "end": 298,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 306,
            "end": 314,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 319,
              "end": 321,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 325,
              "end": 333,
              "left": {
                "type": "Identifier",
                "start": 325,
                "end": 327,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 336,
            "end": 350,
            "left": {
              "type": "Identifier",
              "start": 336,
              "end": 338,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 342,
              "end": 350,
              "left": {
                "type": "Identifier",
                "start": 342,
                "end": 344,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 348,
                "end": 350,
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
            "start": 316,
            "end": 319,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 333,
            "end": 336,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 350,
            "end": 358,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 363,
              "end": 365,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 368,
              "end": 376,
              "left": {
                "type": "Identifier",
                "start": 368,
                "end": 370,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 374,
                "end": 376,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 379,
            "end": 392,
            "left": {
              "type": "Identifier",
              "start": 379,
              "end": 381,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 384,
              "end": 392,
              "left": {
                "type": "Identifier",
                "start": 384,
                "end": 386,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 390,
                "end": 392,
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
            "start": 360,
            "end": 363,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 376,
            "end": 379,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 392,
            "end": 400,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 405,
              "end": 413,
              "left": {
                "type": "Identifier",
                "start": 405,
                "end": 407,
                "name": "t1",
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
            "end": 434,
            "left": {
              "type": "BinaryExpression",
              "start": 421,
              "end": 429,
              "left": {
                "type": "Identifier",
                "start": 421,
                "end": 423,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 427,
                "end": 429,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 432,
              "end": 434,
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
            "start": 402,
            "end": 405,
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
            "start": 434,
            "end": 442,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 447,
              "end": 460,
              "left": {
                "type": "Identifier",
                "start": 447,
                "end": 449,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 452,
                "end": 460,
                "left": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 454,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 460,
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
              "start": 463,
              "end": 465,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 468,
            "end": 486,
            "left": {
              "type": "BinaryExpression",
              "start": 468,
              "end": 481,
              "left": {
                "type": "Identifier",
                "start": 468,
                "end": 470,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 473,
                "end": 481,
                "left": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 475,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 481,
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
              "start": 484,
              "end": 486,
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
            "start": 444,
            "end": 447,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 465,
            "end": 468,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 486,
            "end": 494,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 507,
              "end": 521,
              "left": {
                "type": "Identifier",
                "start": 507,
                "end": 509,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 513,
                "end": 521,
                "left": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 515,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 521,
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
            "start": 526,
            "end": 549,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 534,
              "end": 548,
              "left": {
                "type": "Identifier",
                "start": 534,
                "end": 536,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 540,
                "end": 548,
                "left": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 542,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
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
            "start": 496,
            "end": 499,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 523,
            "end": 526,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 550,
            "end": 558,
            "value": {
              "cooked": " world",
              "raw": " world"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 564,
              "end": 566,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 570,
              "end": 572,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 588,
            "end": 596,
            "left": {
              "type": "Identifier",
              "start": 588,
              "end": 590,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 594,
              "end": 596,
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
            "start": 561,
            "end": 564,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 572,
            "end": 588,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 596,
            "end": 601,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 606,
              "end": 608,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 612,
              "end": 620,
              "left": {
                "type": "Identifier",
                "start": 612,
                "end": 614,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 618,
                "end": 620,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 636,
            "end": 650,
            "left": {
              "type": "Identifier",
              "start": 636,
              "end": 638,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 642,
              "end": 650,
              "left": {
                "type": "Identifier",
                "start": 642,
                "end": 644,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 648,
                "end": 650,
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
            "start": 603,
            "end": 606,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 620,
            "end": 636,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 650,
            "end": 655,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "Identifier",
              "start": 660,
              "end": 662,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 665,
              "end": 673,
              "left": {
                "type": "Identifier",
                "start": 665,
                "end": 667,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 671,
                "end": 673,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 689,
            "end": 702,
            "left": {
              "type": "Identifier",
              "start": 689,
              "end": 691,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 694,
              "end": 702,
              "left": {
                "type": "Identifier",
                "start": 694,
                "end": 696,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 700,
                "end": 702,
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
            "start": 657,
            "end": 660,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 673,
            "end": 689,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 702,
            "end": 707,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 712,
              "end": 720,
              "left": {
                "type": "Identifier",
                "start": 712,
                "end": 714,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 718,
                "end": 720,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 723,
              "end": 725,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 741,
            "end": 754,
            "left": {
              "type": "BinaryExpression",
              "start": 741,
              "end": 749,
              "left": {
                "type": "Identifier",
                "start": 741,
                "end": 743,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 747,
                "end": 749,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 752,
              "end": 754,
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
            "start": 709,
            "end": 712,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 725,
            "end": 741,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 754,
            "end": 759,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "left": {
              "type": "BinaryExpression",
              "start": 764,
              "end": 777,
              "left": {
                "type": "Identifier",
                "start": 764,
                "end": 766,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 769,
                "end": 777,
                "left": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 771,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 777,
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
              "start": 780,
              "end": 782,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 798,
            "end": 816,
            "left": {
              "type": "BinaryExpression",
              "start": 798,
              "end": 811,
              "left": {
                "type": "Identifier",
                "start": 798,
                "end": 800,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 803,
                "end": 811,
                "left": {
                  "type": "Identifier",
                  "start": 803,
                  "end": 805,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 811,
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
              "start": 814,
              "end": 816,
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
            "start": 761,
            "end": 764,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 782,
            "end": 798,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 816,
            "end": 821,
            "value": {
              "cooked": " !!",
              "raw": " !!"
            },
            "tail": true
          }
        ]
      },
      "directive": null
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 834,
              "end": 848,
              "left": {
                "type": "Identifier",
                "start": 834,
                "end": 836,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 840,
                "end": 848,
                "left": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 842,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 848,
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
            "start": 866,
            "end": 889,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 874,
              "end": 888,
              "left": {
                "type": "Identifier",
                "start": 874,
                "end": 876,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 880,
                "end": 888,
                "left": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 882,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 888,
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
            "start": 823,
            "end": 826,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 850,
            "end": 866,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 889,
            "end": 894,
            "value": {
              "cooked": " !!",
              "raw": " !!"
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
