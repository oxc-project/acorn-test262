__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 799,
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
            "value": 10,
            "regex": null,
            "bigint": null
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
            "value": 10,
            "regex": null,
            "bigint": null
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
      "start": 74,
      "end": 88,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 74,
        "end": 87,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 77,
            "end": 85,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 77,
              "end": 79,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 83,
              "end": 85,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 74,
            "end": 77,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 85,
            "end": 87,
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
      "start": 89,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 89,
        "end": 108,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 92,
            "end": 106,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 98,
              "end": 106,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 98,
                "end": 100,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 104,
                "end": 106,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 89,
            "end": 92,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 106,
            "end": 108,
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
      "start": 110,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 110,
        "end": 128,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 113,
            "end": 126,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 118,
              "end": 126,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 118,
                "end": 120,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 124,
                "end": 126,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 110,
            "end": 113,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 126,
            "end": 128,
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
      "start": 130,
      "end": 149,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 130,
        "end": 148,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 133,
            "end": 146,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 133,
              "end": 141,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 133,
                "end": 135,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 139,
                "end": 141,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 144,
              "end": 146,
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
            "start": 130,
            "end": 133,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 146,
            "end": 148,
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
      "start": 150,
      "end": 175,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 150,
        "end": 174,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 153,
            "end": 171,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 153,
              "end": 166,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 153,
                "end": 155,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 158,
                "end": 166,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 160,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 166,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 169,
              "end": 171,
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
            "start": 150,
            "end": 153,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 172,
            "end": 174,
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
      "start": 176,
      "end": 206,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 176,
        "end": 205,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 179,
            "end": 202,
            "argument": {
              "type": "BinaryExpression",
              "start": 187,
              "end": 201,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 187,
                "end": 189,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 193,
                "end": 201,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 195,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 201,
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
            "start": 176,
            "end": 179,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 203,
            "end": 205,
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
      "start": 207,
      "end": 241,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 207,
        "end": 240,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 210,
            "end": 237,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 210,
              "end": 211,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "right": {
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
                  "optional": false,
                  "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 236,
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
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 207,
            "end": 210,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
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
      "start": 243,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 243,
        "end": 267,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 246,
            "end": 254,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 246,
              "end": 248,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 252,
              "end": 254,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 257,
            "end": 265,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 257,
              "end": 259,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 263,
              "end": 265,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 243,
            "end": 246,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 254,
            "end": 257,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 265,
            "end": 267,
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
      "start": 269,
      "end": 306,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 269,
        "end": 305,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 272,
            "end": 286,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 274,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 278,
              "end": 286,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 278,
                "end": 280,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 284,
                "end": 286,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 289,
            "end": 303,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 289,
              "end": 291,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 295,
              "end": 303,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 295,
                "end": 297,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 301,
                "end": 303,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 269,
            "end": 272,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 286,
            "end": 289,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 303,
            "end": 305,
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
      "start": 307,
      "end": 342,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 307,
        "end": 341,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 310,
            "end": 323,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 310,
              "end": 312,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 315,
              "end": 323,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 315,
                "end": 317,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 321,
                "end": 323,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 326,
            "end": 339,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 326,
              "end": 328,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 337,
                "end": 339,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 307,
            "end": 310,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 323,
            "end": 326,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 339,
            "end": 341,
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
      "start": 343,
      "end": 378,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 343,
        "end": 377,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 346,
            "end": 359,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 346,
              "end": 354,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 346,
                "end": 348,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 352,
                "end": 354,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 357,
              "end": 359,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 362,
            "end": 375,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 362,
              "end": 370,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 362,
                "end": 364,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 368,
                "end": 370,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 373,
              "end": 375,
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
            "start": 343,
            "end": 346,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 359,
            "end": 362,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 375,
            "end": 377,
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
      "start": 379,
      "end": 424,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 379,
        "end": 423,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 382,
            "end": 400,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 382,
              "end": 395,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 382,
                "end": 384,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 387,
                "end": 395,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 389,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 395,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
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
            "end": 421,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 403,
              "end": 416,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 403,
                "end": 405,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 408,
                "end": 416,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 410,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 416,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 419,
              "end": 421,
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
            "start": 379,
            "end": 382,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 400,
            "end": 403,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 421,
            "end": 423,
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
      "start": 425,
      "end": 480,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 425,
        "end": 479,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 428,
            "end": 451,
            "argument": {
              "type": "BinaryExpression",
              "start": 436,
              "end": 450,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 436,
                "end": 438,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 442,
                "end": 450,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 444,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
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
            "start": 454,
            "end": 477,
            "argument": {
              "type": "BinaryExpression",
              "start": 462,
              "end": 476,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 462,
                "end": 464,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 468,
                "end": 476,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 470,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 476,
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
            "start": 425,
            "end": 428,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 451,
            "end": 454,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 477,
            "end": 479,
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
      "start": 482,
      "end": 520,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 482,
        "end": 519,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 485,
            "end": 493,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 485,
              "end": 487,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 491,
              "end": 493,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 509,
            "end": 517,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 509,
              "end": 511,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 515,
              "end": 517,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 482,
            "end": 485,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 493,
            "end": 509,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 517,
            "end": 519,
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
      "start": 521,
      "end": 571,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 521,
        "end": 570,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 524,
            "end": 538,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 524,
              "end": 526,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 530,
              "end": 538,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 530,
                "end": 532,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 536,
                "end": 538,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 554,
            "end": 568,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 554,
              "end": 556,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 560,
              "end": 568,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 560,
                "end": 562,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 566,
                "end": 568,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 521,
            "end": 524,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 538,
            "end": 554,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 568,
            "end": 570,
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
      "start": 572,
      "end": 620,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 572,
        "end": 619,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 575,
            "end": 588,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 575,
              "end": 577,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 580,
              "end": 588,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 580,
                "end": 582,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 586,
                "end": 588,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 604,
            "end": 617,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 604,
              "end": 606,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 609,
              "end": 617,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 609,
                "end": 611,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 615,
                "end": 617,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 572,
            "end": 575,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 588,
            "end": 604,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 617,
            "end": 619,
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
      "start": 621,
      "end": 669,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 621,
        "end": 668,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 624,
            "end": 637,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 624,
              "end": 632,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 624,
                "end": 626,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 630,
                "end": 632,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 635,
              "end": 637,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 653,
            "end": 666,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 653,
              "end": 661,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 653,
                "end": 655,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 659,
                "end": 661,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 664,
              "end": 666,
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
            "start": 621,
            "end": 624,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 637,
            "end": 653,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 666,
            "end": 668,
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
      "start": 670,
      "end": 728,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 670,
        "end": 727,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 673,
            "end": 691,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 673,
              "end": 686,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 673,
                "end": 675,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 678,
                "end": 686,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 680,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 686,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 689,
              "end": 691,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 707,
            "end": 725,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 707,
              "end": 720,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 707,
                "end": 709,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 712,
                "end": 720,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 714,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 720,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Identifier",
              "start": 723,
              "end": 725,
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
            "start": 670,
            "end": 673,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 691,
            "end": 707,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 725,
            "end": 727,
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
      "start": 729,
      "end": 799,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 729,
        "end": 798,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 732,
            "end": 755,
            "argument": {
              "type": "BinaryExpression",
              "start": 740,
              "end": 754,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 740,
                "end": 742,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 746,
                "end": 754,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 748,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 754,
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
            "start": 772,
            "end": 795,
            "argument": {
              "type": "BinaryExpression",
              "start": 780,
              "end": 794,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 780,
                "end": 782,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 786,
                "end": 794,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 788,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 792,
                  "end": 794,
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
            "start": 729,
            "end": 732,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 756,
            "end": 772,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 796,
            "end": 798,
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
