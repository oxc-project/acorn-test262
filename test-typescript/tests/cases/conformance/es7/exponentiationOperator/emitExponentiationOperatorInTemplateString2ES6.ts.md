__ESTREE_TEST__:PASS:
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
            "start": 82,
            "end": 90,
            "left": {
              "type": "Identifier",
              "start": 82,
              "end": 84,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 88,
              "end": 90,
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
            "end": 82,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 90,
            "end": 92,
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
            "left": {
              "type": "Identifier",
              "start": 103,
              "end": 105,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 117,
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 111,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 115,
                "end": 117,
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
            "end": 103,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 117,
            "end": 119,
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
            "left": {
              "type": "Identifier",
              "start": 130,
              "end": 132,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 135,
              "end": 143,
              "left": {
                "type": "Identifier",
                "start": 135,
                "end": 137,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 141,
                "end": 143,
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
            "end": 130,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 143,
            "end": 145,
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
            "left": {
              "type": "BinaryExpression",
              "start": 156,
              "end": 164,
              "left": {
                "type": "Identifier",
                "start": 156,
                "end": 158,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 162,
                "end": 164,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
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
            "end": 156,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 169,
            "end": 171,
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
            "left": {
              "type": "BinaryExpression",
              "start": 182,
              "end": 195,
              "left": {
                "type": "Identifier",
                "start": 182,
                "end": 184,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 187,
                "end": 195,
                "left": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 189,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 195,
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
              "start": 198,
              "end": 200,
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
            "end": 182,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 201,
            "end": 203,
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 222,
              "end": 236,
              "left": {
                "type": "Identifier",
                "start": 222,
                "end": 224,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 228,
                "end": 236,
                "left": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 230,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 236,
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
            "end": 214,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 238,
            "end": 240,
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
            "left": {
              "type": "Literal",
              "start": 251,
              "end": 252,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "UnaryExpression",
              "start": 255,
              "end": 278,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "BinaryExpression",
                "start": 263,
                "end": 277,
                "left": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 265,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "BinaryExpression",
                  "start": 269,
                  "end": 277,
                  "left": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 271,
                    "name": "t2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 277,
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
            "end": 251,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 279,
            "end": 281,
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
            "left": {
              "type": "Identifier",
              "start": 293,
              "end": 295,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 299,
              "end": 301,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 304,
            "end": 312,
            "left": {
              "type": "Identifier",
              "start": 304,
              "end": 306,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 310,
              "end": 312,
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
            "end": 293,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 301,
            "end": 304,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 312,
            "end": 314,
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
            "left": {
              "type": "Identifier",
              "start": 325,
              "end": 327,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 331,
              "end": 339,
              "left": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 337,
                "end": 339,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 342,
            "end": 356,
            "left": {
              "type": "Identifier",
              "start": 342,
              "end": 344,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 348,
              "end": 356,
              "left": {
                "type": "Identifier",
                "start": 348,
                "end": 350,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 354,
                "end": 356,
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
            "end": 325,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 339,
            "end": 342,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 356,
            "end": 358,
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
            "left": {
              "type": "Identifier",
              "start": 369,
              "end": 371,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 374,
              "end": 382,
              "left": {
                "type": "Identifier",
                "start": 374,
                "end": 376,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 380,
                "end": 382,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 385,
            "end": 398,
            "left": {
              "type": "Identifier",
              "start": 385,
              "end": 387,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 398,
              "left": {
                "type": "Identifier",
                "start": 390,
                "end": 392,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 396,
                "end": 398,
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
            "end": 369,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 382,
            "end": 385,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 398,
            "end": 400,
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
            "left": {
              "type": "BinaryExpression",
              "start": 411,
              "end": 419,
              "left": {
                "type": "Identifier",
                "start": 411,
                "end": 413,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 417,
                "end": 419,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 422,
              "end": 424,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 427,
            "end": 440,
            "left": {
              "type": "BinaryExpression",
              "start": 427,
              "end": 435,
              "left": {
                "type": "Identifier",
                "start": 427,
                "end": 429,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 433,
                "end": 435,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 438,
              "end": 440,
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
            "end": 411,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 424,
            "end": 427,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 440,
            "end": 442,
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
            "left": {
              "type": "BinaryExpression",
              "start": 453,
              "end": 466,
              "left": {
                "type": "Identifier",
                "start": 453,
                "end": 455,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 458,
                "end": 466,
                "left": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 460,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 466,
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
              "start": 469,
              "end": 471,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 474,
            "end": 492,
            "left": {
              "type": "BinaryExpression",
              "start": 474,
              "end": 487,
              "left": {
                "type": "Identifier",
                "start": 474,
                "end": 476,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 479,
                "end": 487,
                "left": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 481,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 487,
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
              "start": 490,
              "end": 492,
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
            "end": 453,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 471,
            "end": 474,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 492,
            "end": 494,
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 513,
              "end": 527,
              "left": {
                "type": "Identifier",
                "start": 513,
                "end": 515,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 519,
                "end": 527,
                "left": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 521,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 527,
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
            "start": 532,
            "end": 555,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 540,
              "end": 554,
              "left": {
                "type": "Identifier",
                "start": 540,
                "end": 542,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 546,
                "end": 554,
                "left": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 554,
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
            "end": 505,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 529,
            "end": 532,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 556,
            "end": 558,
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
            "left": {
              "type": "Identifier",
              "start": 570,
              "end": 572,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 576,
              "end": 578,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 594,
            "end": 602,
            "left": {
              "type": "Identifier",
              "start": 594,
              "end": 596,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 600,
              "end": 602,
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
            "end": 570,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 578,
            "end": 594,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 602,
            "end": 604,
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
            "left": {
              "type": "Identifier",
              "start": 615,
              "end": 617,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 621,
              "end": 629,
              "left": {
                "type": "Identifier",
                "start": 621,
                "end": 623,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 627,
                "end": 629,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 645,
            "end": 659,
            "left": {
              "type": "Identifier",
              "start": 645,
              "end": 647,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 651,
              "end": 659,
              "left": {
                "type": "Identifier",
                "start": 651,
                "end": 653,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 657,
                "end": 659,
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
            "start": 606,
            "end": 615,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 629,
            "end": 645,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 659,
            "end": 661,
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
            "left": {
              "type": "Identifier",
              "start": 672,
              "end": 674,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 677,
              "end": 685,
              "left": {
                "type": "Identifier",
                "start": 677,
                "end": 679,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 683,
                "end": 685,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 701,
            "end": 714,
            "left": {
              "type": "Identifier",
              "start": 701,
              "end": 703,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 706,
              "end": 714,
              "left": {
                "type": "Identifier",
                "start": 706,
                "end": 708,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 712,
                "end": 714,
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
            "start": 663,
            "end": 672,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 685,
            "end": 701,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 714,
            "end": 716,
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
            "left": {
              "type": "BinaryExpression",
              "start": 727,
              "end": 735,
              "left": {
                "type": "Identifier",
                "start": 727,
                "end": 729,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 733,
                "end": 735,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 738,
              "end": 740,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 756,
            "end": 769,
            "left": {
              "type": "BinaryExpression",
              "start": 756,
              "end": 764,
              "left": {
                "type": "Identifier",
                "start": 756,
                "end": 758,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 762,
                "end": 764,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 767,
              "end": 769,
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
            "start": 718,
            "end": 727,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 740,
            "end": 756,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 769,
            "end": 771,
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
            "left": {
              "type": "BinaryExpression",
              "start": 782,
              "end": 795,
              "left": {
                "type": "Identifier",
                "start": 782,
                "end": 784,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 787,
                "end": 795,
                "left": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 789,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 795,
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
              "start": 798,
              "end": 800,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 816,
            "end": 834,
            "left": {
              "type": "BinaryExpression",
              "start": 816,
              "end": 829,
              "left": {
                "type": "Identifier",
                "start": 816,
                "end": 818,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 821,
                "end": 829,
                "left": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 823,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 829,
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
              "start": 832,
              "end": 834,
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
            "start": 773,
            "end": 782,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 800,
            "end": 816,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 834,
            "end": 836,
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
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 855,
              "end": 869,
              "left": {
                "type": "Identifier",
                "start": 855,
                "end": 857,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 861,
                "end": 869,
                "left": {
                  "type": "Identifier",
                  "start": 861,
                  "end": 863,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 867,
                  "end": 869,
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
            "start": 887,
            "end": 910,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 895,
              "end": 909,
              "left": {
                "type": "Identifier",
                "start": 895,
                "end": 897,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 901,
                "end": 909,
                "left": {
                  "type": "Identifier",
                  "start": 901,
                  "end": 903,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 909,
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
            "start": 838,
            "end": 847,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 871,
            "end": 887,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 911,
            "end": 913,
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
