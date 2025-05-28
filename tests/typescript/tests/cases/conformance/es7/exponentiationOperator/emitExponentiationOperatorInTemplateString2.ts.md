__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 896,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 9,
            "end": 11,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 22,
            "end": 24,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 32,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 75,
      "expression": {
        "type": "TemplateLiteral",
        "start": 55,
        "end": 74,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 55,
            "end": 64,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 72,
            "end": 74,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 64,
            "end": 72,
            "left": {
              "type": "Identifier",
              "start": 64,
              "end": 66,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 70,
              "end": 72,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 102,
      "expression": {
        "type": "TemplateLiteral",
        "start": 76,
        "end": 101,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 76,
            "end": 85,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 99,
            "end": 101,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 85,
            "end": 99,
            "left": {
              "type": "Identifier",
              "start": 85,
              "end": 87,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 91,
              "end": 99,
              "left": {
                "type": "Identifier",
                "start": 91,
                "end": 93,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 97,
                "end": 99,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 128,
      "expression": {
        "type": "TemplateLiteral",
        "start": 103,
        "end": 127,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 103,
            "end": 112,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 125,
            "end": 127,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 112,
            "end": 125,
            "left": {
              "type": "Identifier",
              "start": 112,
              "end": 114,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 117,
              "end": 125,
              "left": {
                "type": "Identifier",
                "start": 117,
                "end": 119,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 125,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 154,
      "expression": {
        "type": "TemplateLiteral",
        "start": 129,
        "end": 153,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 129,
            "end": 138,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 151,
            "end": 153,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 138,
            "end": 151,
            "left": {
              "type": "BinaryExpression",
              "start": 138,
              "end": 146,
              "left": {
                "type": "Identifier",
                "start": 138,
                "end": 140,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 144,
                "end": 146,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 149,
              "end": 151,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 186,
      "expression": {
        "type": "TemplateLiteral",
        "start": 155,
        "end": 185,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 155,
            "end": 164,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 183,
            "end": 185,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 164,
            "end": 182,
            "left": {
              "type": "BinaryExpression",
              "start": 164,
              "end": 177,
              "left": {
                "type": "Identifier",
                "start": 164,
                "end": 166,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 169,
                "end": 177,
                "left": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 177,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 180,
              "end": 182,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 223,
      "expression": {
        "type": "TemplateLiteral",
        "start": 187,
        "end": 222,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 187,
            "end": 196,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 220,
            "end": 222,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 196,
            "end": 219,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 204,
              "end": 218,
              "left": {
                "type": "Identifier",
                "start": 204,
                "end": 206,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 210,
                "end": 218,
                "left": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 212,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 218,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "prefix": true
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 264,
      "expression": {
        "type": "TemplateLiteral",
        "start": 224,
        "end": 263,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 224,
            "end": 233,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 261,
            "end": 263,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 233,
            "end": 260,
            "left": {
              "type": "Literal",
              "start": 233,
              "end": 234,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "UnaryExpression",
              "start": 237,
              "end": 260,
              "operator": "typeof",
              "argument": {
                "type": "BinaryExpression",
                "start": 245,
                "end": 259,
                "left": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 247,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "BinaryExpression",
                  "start": 251,
                  "end": 259,
                  "left": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 253,
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 259,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "prefix": true
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 297,
      "expression": {
        "type": "TemplateLiteral",
        "start": 266,
        "end": 296,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 266,
            "end": 275,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 283,
            "end": 286,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 294,
            "end": 296,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 275,
            "end": 283,
            "left": {
              "type": "Identifier",
              "start": 275,
              "end": 277,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 281,
              "end": 283,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 286,
            "end": 294,
            "left": {
              "type": "Identifier",
              "start": 286,
              "end": 288,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 292,
              "end": 294,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 341,
      "expression": {
        "type": "TemplateLiteral",
        "start": 298,
        "end": 340,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 298,
            "end": 307,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 321,
            "end": 324,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 338,
            "end": 340,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 307,
            "end": 321,
            "left": {
              "type": "Identifier",
              "start": 307,
              "end": 309,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 319,
                "end": 321,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 324,
            "end": 338,
            "left": {
              "type": "Identifier",
              "start": 324,
              "end": 326,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 330,
              "end": 338,
              "left": {
                "type": "Identifier",
                "start": 330,
                "end": 332,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 336,
                "end": 338,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 342,
      "end": 383,
      "expression": {
        "type": "TemplateLiteral",
        "start": 342,
        "end": 382,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 342,
            "end": 351,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 364,
            "end": 367,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 380,
            "end": 382,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 351,
            "end": 364,
            "left": {
              "type": "Identifier",
              "start": 351,
              "end": 353,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 356,
              "end": 364,
              "left": {
                "type": "Identifier",
                "start": 356,
                "end": 358,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 362,
                "end": 364,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 367,
            "end": 380,
            "left": {
              "type": "Identifier",
              "start": 367,
              "end": 369,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 372,
              "end": 380,
              "left": {
                "type": "Identifier",
                "start": 372,
                "end": 374,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 378,
                "end": 380,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 425,
      "expression": {
        "type": "TemplateLiteral",
        "start": 384,
        "end": 424,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 384,
            "end": 393,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 406,
            "end": 409,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 422,
            "end": 424,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 393,
            "end": 406,
            "left": {
              "type": "BinaryExpression",
              "start": 393,
              "end": 401,
              "left": {
                "type": "Identifier",
                "start": 393,
                "end": 395,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 399,
                "end": 401,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 404,
              "end": 406,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 409,
            "end": 422,
            "left": {
              "type": "BinaryExpression",
              "start": 409,
              "end": 417,
              "left": {
                "type": "Identifier",
                "start": 409,
                "end": 411,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 415,
                "end": 417,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 420,
              "end": 422,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 426,
      "end": 477,
      "expression": {
        "type": "TemplateLiteral",
        "start": 426,
        "end": 476,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 426,
            "end": 435,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 453,
            "end": 456,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 474,
            "end": 476,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 435,
            "end": 453,
            "left": {
              "type": "BinaryExpression",
              "start": 435,
              "end": 448,
              "left": {
                "type": "Identifier",
                "start": 435,
                "end": 437,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 440,
                "end": 448,
                "left": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 442,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 448,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 451,
              "end": 453,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 456,
            "end": 474,
            "left": {
              "type": "BinaryExpression",
              "start": 456,
              "end": 469,
              "left": {
                "type": "Identifier",
                "start": 456,
                "end": 458,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 461,
                "end": 469,
                "left": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 463,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 469,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 472,
              "end": 474,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 541,
      "expression": {
        "type": "TemplateLiteral",
        "start": 478,
        "end": 540,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 478,
            "end": 487,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 511,
            "end": 514,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 538,
            "end": 540,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 487,
            "end": 510,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 495,
              "end": 509,
              "left": {
                "type": "Identifier",
                "start": 495,
                "end": 497,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 501,
                "end": 509,
                "left": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 503,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 509,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "prefix": true
          },
          {
            "type": "UnaryExpression",
            "start": 514,
            "end": 537,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 522,
              "end": 536,
              "left": {
                "type": "Identifier",
                "start": 522,
                "end": 524,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 528,
                "end": 536,
                "left": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 536,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "prefix": true
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 587,
      "expression": {
        "type": "TemplateLiteral",
        "start": 543,
        "end": 586,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 543,
            "end": 552,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 560,
            "end": 576,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 584,
            "end": 586,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 552,
            "end": 560,
            "left": {
              "type": "Identifier",
              "start": 552,
              "end": 554,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 558,
              "end": 560,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 576,
            "end": 584,
            "left": {
              "type": "Identifier",
              "start": 576,
              "end": 578,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 582,
              "end": 584,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 588,
      "end": 644,
      "expression": {
        "type": "TemplateLiteral",
        "start": 588,
        "end": 643,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 588,
            "end": 597,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 611,
            "end": 627,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 641,
            "end": 643,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 597,
            "end": 611,
            "left": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 603,
              "end": 611,
              "left": {
                "type": "Identifier",
                "start": 603,
                "end": 605,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 609,
                "end": 611,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 627,
            "end": 641,
            "left": {
              "type": "Identifier",
              "start": 627,
              "end": 629,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 633,
              "end": 641,
              "left": {
                "type": "Identifier",
                "start": 633,
                "end": 635,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 639,
                "end": 641,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 699,
      "expression": {
        "type": "TemplateLiteral",
        "start": 645,
        "end": 698,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 645,
            "end": 654,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 667,
            "end": 683,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 696,
            "end": 698,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 654,
            "end": 667,
            "left": {
              "type": "Identifier",
              "start": 654,
              "end": 656,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 659,
              "end": 667,
              "left": {
                "type": "Identifier",
                "start": 659,
                "end": 661,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 665,
                "end": 667,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 683,
            "end": 696,
            "left": {
              "type": "Identifier",
              "start": 683,
              "end": 685,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 688,
              "end": 696,
              "left": {
                "type": "Identifier",
                "start": 688,
                "end": 690,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 694,
                "end": 696,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 700,
      "end": 754,
      "expression": {
        "type": "TemplateLiteral",
        "start": 700,
        "end": 753,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 700,
            "end": 709,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 722,
            "end": 738,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 751,
            "end": 753,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 709,
            "end": 722,
            "left": {
              "type": "BinaryExpression",
              "start": 709,
              "end": 717,
              "left": {
                "type": "Identifier",
                "start": 709,
                "end": 711,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 715,
                "end": 717,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 720,
              "end": 722,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 738,
            "end": 751,
            "left": {
              "type": "BinaryExpression",
              "start": 738,
              "end": 746,
              "left": {
                "type": "Identifier",
                "start": 738,
                "end": 740,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 744,
                "end": 746,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 749,
              "end": 751,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 755,
      "end": 819,
      "expression": {
        "type": "TemplateLiteral",
        "start": 755,
        "end": 818,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 755,
            "end": 764,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
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
            "end": 818,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
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
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 777,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 780,
              "end": 782,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 811,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 814,
              "end": 816,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 820,
      "end": 896,
      "expression": {
        "type": "TemplateLiteral",
        "start": 820,
        "end": 895,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 820,
            "end": 829,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 853,
            "end": 869,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 893,
            "end": 895,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 829,
            "end": 852,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 837,
              "end": 851,
              "left": {
                "type": "Identifier",
                "start": 837,
                "end": 839,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 843,
                "end": 851,
                "left": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 845,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 851,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "prefix": true
          },
          {
            "type": "UnaryExpression",
            "start": 869,
            "end": 892,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 877,
              "end": 891,
              "left": {
                "type": "Identifier",
                "start": 877,
                "end": 879,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 883,
                "end": 891,
                "left": {
                  "type": "Identifier",
                  "start": 883,
                  "end": 885,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 891,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "prefix": true
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
