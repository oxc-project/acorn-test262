__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 877,
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
            "end": 58,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 66,
            "end": 74,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 58,
            "end": 66,
            "left": {
              "type": "Identifier",
              "start": 58,
              "end": 60,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 64,
              "end": 66,
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
            "end": 79,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 93,
            "end": 101,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 79,
            "end": 93,
            "left": {
              "type": "Identifier",
              "start": 79,
              "end": 81,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 85,
              "end": 93,
              "left": {
                "type": "Identifier",
                "start": 85,
                "end": 87,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 91,
                "end": 93,
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
            "end": 106,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 119,
            "end": 127,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 106,
            "end": 119,
            "left": {
              "type": "Identifier",
              "start": 106,
              "end": 108,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 111,
              "end": 119,
              "left": {
                "type": "Identifier",
                "start": 111,
                "end": 113,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 117,
                "end": 119,
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
            "end": 132,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 145,
            "end": 153,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 132,
            "end": 145,
            "left": {
              "type": "BinaryExpression",
              "start": 132,
              "end": 140,
              "left": {
                "type": "Identifier",
                "start": 132,
                "end": 134,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 138,
                "end": 140,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 143,
              "end": 145,
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
            "end": 158,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 177,
            "end": 185,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 158,
            "end": 176,
            "left": {
              "type": "BinaryExpression",
              "start": 158,
              "end": 171,
              "left": {
                "type": "Identifier",
                "start": 158,
                "end": 160,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 163,
                "end": 171,
                "left": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 165,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
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
              "start": 174,
              "end": 176,
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
            "end": 190,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 214,
            "end": 222,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 190,
            "end": 213,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 198,
              "end": 212,
              "left": {
                "type": "Identifier",
                "start": 198,
                "end": 200,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 204,
                "end": 212,
                "left": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 206,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 212,
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
            "end": 227,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 255,
            "end": 263,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 227,
            "end": 254,
            "left": {
              "type": "Literal",
              "start": 227,
              "end": 228,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "UnaryExpression",
              "start": 231,
              "end": 254,
              "operator": "typeof",
              "argument": {
                "type": "BinaryExpression",
                "start": 239,
                "end": 253,
                "left": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 241,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "BinaryExpression",
                  "start": 245,
                  "end": 253,
                  "left": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 247,
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 253,
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
            "end": 269,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 277,
            "end": 280,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 288,
            "end": 296,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 269,
            "end": 277,
            "left": {
              "type": "Identifier",
              "start": 269,
              "end": 271,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 275,
              "end": 277,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 280,
            "end": 288,
            "left": {
              "type": "Identifier",
              "start": 280,
              "end": 282,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 286,
              "end": 288,
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
            "end": 301,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 315,
            "end": 318,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 332,
            "end": 340,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 301,
            "end": 315,
            "left": {
              "type": "Identifier",
              "start": 301,
              "end": 303,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 307,
              "end": 315,
              "left": {
                "type": "Identifier",
                "start": 307,
                "end": 309,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 313,
                "end": 315,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 318,
            "end": 332,
            "left": {
              "type": "Identifier",
              "start": 318,
              "end": 320,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 324,
              "end": 332,
              "left": {
                "type": "Identifier",
                "start": 324,
                "end": 326,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 330,
                "end": 332,
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
            "end": 345,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 358,
            "end": 361,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 374,
            "end": 382,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 345,
            "end": 358,
            "left": {
              "type": "Identifier",
              "start": 345,
              "end": 347,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 350,
              "end": 358,
              "left": {
                "type": "Identifier",
                "start": 350,
                "end": 352,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 356,
                "end": 358,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 361,
            "end": 374,
            "left": {
              "type": "Identifier",
              "start": 361,
              "end": 363,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 366,
              "end": 374,
              "left": {
                "type": "Identifier",
                "start": 366,
                "end": 368,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 372,
                "end": 374,
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
            "end": 387,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 400,
            "end": 403,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 416,
            "end": 424,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 387,
            "end": 400,
            "left": {
              "type": "BinaryExpression",
              "start": 387,
              "end": 395,
              "left": {
                "type": "Identifier",
                "start": 387,
                "end": 389,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 393,
                "end": 395,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 398,
              "end": 400,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 403,
            "end": 416,
            "left": {
              "type": "BinaryExpression",
              "start": 403,
              "end": 411,
              "left": {
                "type": "Identifier",
                "start": 403,
                "end": 405,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 409,
                "end": 411,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 414,
              "end": 416,
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
            "end": 429,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 447,
            "end": 450,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 468,
            "end": 476,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 429,
            "end": 447,
            "left": {
              "type": "BinaryExpression",
              "start": 429,
              "end": 442,
              "left": {
                "type": "Identifier",
                "start": 429,
                "end": 431,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 434,
                "end": 442,
                "left": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 436,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 442,
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
              "start": 445,
              "end": 447,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 450,
            "end": 468,
            "left": {
              "type": "BinaryExpression",
              "start": 450,
              "end": 463,
              "left": {
                "type": "Identifier",
                "start": 450,
                "end": 452,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 455,
                "end": 463,
                "left": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 457,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 463,
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
              "start": 466,
              "end": 468,
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
            "end": 481,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 505,
            "end": 508,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 532,
            "end": 540,
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 481,
            "end": 504,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 489,
              "end": 503,
              "left": {
                "type": "Identifier",
                "start": 489,
                "end": 491,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 495,
                "end": 503,
                "left": {
                  "type": "Identifier",
                  "start": 495,
                  "end": 497,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 503,
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
            "start": 508,
            "end": 531,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 516,
              "end": 530,
              "left": {
                "type": "Identifier",
                "start": 516,
                "end": 518,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 522,
                "end": 530,
                "left": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 524,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
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
      "end": 584,
      "expression": {
        "type": "TemplateLiteral",
        "start": 543,
        "end": 583,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 543,
            "end": 546,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 554,
            "end": 570,
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 578,
            "end": 583,
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 546,
            "end": 554,
            "left": {
              "type": "Identifier",
              "start": 546,
              "end": 548,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 552,
              "end": 554,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 570,
            "end": 578,
            "left": {
              "type": "Identifier",
              "start": 570,
              "end": 572,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 576,
              "end": 578,
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
      "start": 585,
      "end": 638,
      "expression": {
        "type": "TemplateLiteral",
        "start": 585,
        "end": 637,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 585,
            "end": 588,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 602,
            "end": 618,
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 632,
            "end": 637,
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 588,
            "end": 602,
            "left": {
              "type": "Identifier",
              "start": 588,
              "end": 590,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 594,
              "end": 602,
              "left": {
                "type": "Identifier",
                "start": 594,
                "end": 596,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 600,
                "end": 602,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 618,
            "end": 632,
            "left": {
              "type": "Identifier",
              "start": 618,
              "end": 620,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 624,
              "end": 632,
              "left": {
                "type": "Identifier",
                "start": 624,
                "end": 626,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 630,
                "end": 632,
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
      "start": 639,
      "end": 690,
      "expression": {
        "type": "TemplateLiteral",
        "start": 639,
        "end": 689,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 639,
            "end": 642,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 655,
            "end": 671,
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 684,
            "end": 689,
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 642,
            "end": 655,
            "left": {
              "type": "Identifier",
              "start": 642,
              "end": 644,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 647,
              "end": 655,
              "left": {
                "type": "Identifier",
                "start": 647,
                "end": 649,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 653,
                "end": 655,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 671,
            "end": 684,
            "left": {
              "type": "Identifier",
              "start": 671,
              "end": 673,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "start": 676,
              "end": 684,
              "left": {
                "type": "Identifier",
                "start": 676,
                "end": 678,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 682,
                "end": 684,
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
      "start": 691,
      "end": 742,
      "expression": {
        "type": "TemplateLiteral",
        "start": 691,
        "end": 741,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 691,
            "end": 694,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 707,
            "end": 723,
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 736,
            "end": 741,
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 694,
            "end": 707,
            "left": {
              "type": "BinaryExpression",
              "start": 694,
              "end": 702,
              "left": {
                "type": "Identifier",
                "start": 694,
                "end": 696,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 700,
                "end": 702,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 705,
              "end": 707,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 723,
            "end": 736,
            "left": {
              "type": "BinaryExpression",
              "start": 723,
              "end": 731,
              "left": {
                "type": "Identifier",
                "start": 723,
                "end": 725,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 729,
                "end": 731,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 734,
              "end": 736,
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
      "start": 743,
      "end": 804,
      "expression": {
        "type": "TemplateLiteral",
        "start": 743,
        "end": 803,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 743,
            "end": 746,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 764,
            "end": 780,
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 798,
            "end": 803,
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 746,
            "end": 764,
            "left": {
              "type": "BinaryExpression",
              "start": 746,
              "end": 759,
              "left": {
                "type": "Identifier",
                "start": 746,
                "end": 748,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 751,
                "end": 759,
                "left": {
                  "type": "Identifier",
                  "start": 751,
                  "end": 753,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 757,
                  "end": 759,
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
              "start": 762,
              "end": 764,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 780,
            "end": 798,
            "left": {
              "type": "BinaryExpression",
              "start": 780,
              "end": 793,
              "left": {
                "type": "Identifier",
                "start": 780,
                "end": 782,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 785,
                "end": 793,
                "left": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 787,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 793,
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
              "start": 796,
              "end": 798,
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
      "start": 805,
      "end": 877,
      "expression": {
        "type": "TemplateLiteral",
        "start": 805,
        "end": 876,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 805,
            "end": 808,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 832,
            "end": 848,
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 871,
            "end": 876,
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 808,
            "end": 831,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 816,
              "end": 830,
              "left": {
                "type": "Identifier",
                "start": 816,
                "end": 818,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 822,
                "end": 830,
                "left": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 824,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 828,
                  "end": 830,
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
            "start": 848,
            "end": 871,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 856,
              "end": 870,
              "left": {
                "type": "Identifier",
                "start": 856,
                "end": 858,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 862,
                "end": 870,
                "left": {
                  "type": "Identifier",
                  "start": 862,
                  "end": 864,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 868,
                  "end": 870,
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
