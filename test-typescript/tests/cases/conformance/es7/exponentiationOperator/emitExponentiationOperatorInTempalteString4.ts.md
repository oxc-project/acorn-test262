__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 811,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
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
      "start": 13,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 24,
          "definite": false,
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
      "start": 26,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 76,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 55,
        "end": 75,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 58,
            "end": 67,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 58,
              "end": 60,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "UnaryExpression",
              "start": 64,
              "end": 67,
              "argument": {
                "type": "Identifier",
                "start": 65,
                "end": 67,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "prefix": true
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 55,
            "end": 58,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 67,
            "end": 75,
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
      "start": 77,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 77,
        "end": 104,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 80,
            "end": 96,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 80,
              "end": 91,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 81,
                "end": 84,
                "argument": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 84,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 89,
                "end": 91,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 94,
              "end": 96,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 77,
            "end": 80,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 96,
            "end": 104,
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
      "start": 106,
      "end": 136,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 106,
        "end": 135,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 109,
            "end": 127,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 122,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 110,
                "end": 115,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 111,
                  "end": 115,
                  "argument": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 115,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": true
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 120,
                "end": 122,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 125,
              "end": 127,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 106,
            "end": 109,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 127,
            "end": 135,
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
      "start": 137,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 137,
        "end": 166,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 140,
            "end": 158,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 140,
              "end": 153,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 141,
                "end": 146,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 142,
                  "end": 146,
                  "argument": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 144,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 151,
                "end": 153,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 156,
              "end": 158,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 137,
            "end": 140,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 158,
            "end": 166,
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
      "start": 168,
      "end": 200,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 168,
        "end": 199,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 171,
            "end": 190,
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "start": 172,
              "end": 175,
              "argument": {
                "type": "Identifier",
                "start": 173,
                "end": 175,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "~",
              "prefix": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 180,
              "end": 190,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 180,
                "end": 182,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "UpdateExpression",
                "start": 186,
                "end": 190,
                "argument": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 190,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "--",
                "prefix": true
              }
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
            "start": 191,
            "end": 199,
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
      "start": 201,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 201,
        "end": 236,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 204,
            "end": 227,
            "argument": {
              "type": "BinaryExpression",
              "start": 212,
              "end": 226,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 212,
                "end": 214,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 218,
                "end": 226,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 220,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 226,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 201,
            "end": 204,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 228,
            "end": 236,
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
      "start": 278,
      "end": 318,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 278,
        "end": 317,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 281,
            "end": 290,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 281,
              "end": 283,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "UnaryExpression",
              "start": 287,
              "end": 290,
              "argument": {
                "type": "Identifier",
                "start": 288,
                "end": 290,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "BinaryExpression",
            "start": 306,
            "end": 315,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 306,
              "end": 308,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "UnaryExpression",
              "start": 312,
              "end": 315,
              "argument": {
                "type": "Identifier",
                "start": 313,
                "end": 315,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "prefix": true
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 278,
            "end": 281,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 290,
            "end": 306,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 315,
            "end": 317,
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
      "start": 319,
      "end": 373,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 319,
        "end": 372,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 322,
            "end": 338,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 322,
              "end": 333,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 323,
                "end": 326,
                "argument": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 326,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 336,
              "end": 338,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 354,
            "end": 370,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 354,
              "end": 365,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 355,
                "end": 358,
                "argument": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 358,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 363,
                "end": 365,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 368,
              "end": 370,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 319,
            "end": 322,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 338,
            "end": 354,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 370,
            "end": 372,
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
      "start": 374,
      "end": 434,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 374,
        "end": 433,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 377,
            "end": 395,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 377,
              "end": 390,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 378,
                "end": 383,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 379,
                  "end": 383,
                  "argument": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 383,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": true
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 388,
                "end": 390,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 393,
              "end": 395,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 411,
            "end": 431,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 411,
              "end": 413,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 417,
              "end": 431,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 418,
                "end": 423,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 419,
                  "end": 423,
                  "argument": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 423,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": true
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "UnaryExpression",
                "start": 427,
                "end": 431,
                "argument": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 431,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "-",
                "prefix": true
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 374,
            "end": 377,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 395,
            "end": 411,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 431,
            "end": 433,
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
      "start": 435,
      "end": 497,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 435,
        "end": 496,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 438,
            "end": 456,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 438,
              "end": 451,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 439,
                "end": 444,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 440,
                  "end": 444,
                  "argument": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 442,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 449,
                "end": 451,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 454,
              "end": 456,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 472,
            "end": 494,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 472,
              "end": 474,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 478,
              "end": 494,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 479,
                "end": 484,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 480,
                  "end": 484,
                  "argument": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 482,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "UnaryExpression",
                "start": 490,
                "end": 494,
                "argument": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 494,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "-",
                "prefix": true
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 435,
            "end": 438,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 456,
            "end": 472,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 494,
            "end": 496,
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
      "start": 498,
      "end": 560,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 498,
        "end": 559,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 501,
            "end": 520,
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "start": 502,
              "end": 505,
              "argument": {
                "type": "Identifier",
                "start": 503,
                "end": 505,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "~",
              "prefix": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 510,
              "end": 520,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 510,
                "end": 512,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "UpdateExpression",
                "start": 516,
                "end": 520,
                "argument": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 520,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "--",
                "prefix": true
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 537,
            "end": 556,
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "start": 538,
              "end": 541,
              "argument": {
                "type": "Identifier",
                "start": 539,
                "end": 541,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "~",
              "prefix": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 546,
              "end": 556,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 546,
                "end": 548,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "UpdateExpression",
                "start": 552,
                "end": 556,
                "argument": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 556,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "--",
                "prefix": true
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 498,
            "end": 501,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 521,
            "end": 537,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 557,
            "end": 559,
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
      "end": 629,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 561,
        "end": 628,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 564,
            "end": 587,
            "argument": {
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
                "optional": false,
                "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 586,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "operator": "typeof",
            "prefix": true
          },
          {
            "type": "UnaryExpression",
            "start": 603,
            "end": 626,
            "argument": {
              "type": "BinaryExpression",
              "start": 611,
              "end": 625,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 611,
                "end": 613,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 617,
                "end": 625,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 619,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 625,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 587,
            "end": 603,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 626,
            "end": 628,
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
      "start": 652,
      "end": 680,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 652,
        "end": 679,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 661,
            "end": 677,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 661,
              "end": 672,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 662,
                "end": 665,
                "argument": {
                  "type": "Identifier",
                  "start": 663,
                  "end": 665,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 670,
                "end": 672,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 675,
              "end": 677,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 652,
            "end": 661,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 677,
            "end": 679,
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
      "start": 681,
      "end": 711,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 681,
        "end": 710,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 690,
            "end": 708,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 690,
              "end": 703,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 691,
                "end": 696,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 692,
                  "end": 696,
                  "argument": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 696,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": true
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 701,
                "end": 703,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 706,
              "end": 708,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 681,
            "end": 690,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 708,
            "end": 710,
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
      "start": 712,
      "end": 742,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 712,
        "end": 741,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 721,
            "end": 739,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 721,
              "end": 734,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 722,
                "end": 727,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 723,
                  "end": 727,
                  "argument": {
                    "type": "Identifier",
                    "start": 723,
                    "end": 725,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 732,
                "end": 734,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 737,
              "end": 739,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 712,
            "end": 721,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 739,
            "end": 741,
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
      "start": 743,
      "end": 775,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 743,
        "end": 774,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 752,
            "end": 771,
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "start": 753,
              "end": 756,
              "argument": {
                "type": "Identifier",
                "start": 754,
                "end": 756,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "~",
              "prefix": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 761,
              "end": 771,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 761,
                "end": 763,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "UpdateExpression",
                "start": 767,
                "end": 771,
                "argument": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 771,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "--",
                "prefix": true
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 743,
            "end": 752,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 772,
            "end": 774,
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
      "start": 776,
      "end": 811,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 776,
        "end": 810,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 785,
            "end": 808,
            "argument": {
              "type": "BinaryExpression",
              "start": 793,
              "end": 807,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 793,
                "end": 795,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 799,
                "end": 807,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 799,
                  "end": 801,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 807,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 776,
            "end": 785,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 808,
            "end": 810,
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
