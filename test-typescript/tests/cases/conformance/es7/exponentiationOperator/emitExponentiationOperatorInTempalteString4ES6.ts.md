__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 829,
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
      "end": 94,
      "expression": {
        "type": "TemplateLiteral",
        "start": 73,
        "end": 93,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 76,
            "end": 85,
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
              "type": "UnaryExpression",
              "start": 82,
              "end": 85,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 83,
                "end": 85,
                "name": "t2",
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
            "start": 85,
            "end": 93,
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
      "start": 95,
      "end": 123,
      "expression": {
        "type": "TemplateLiteral",
        "start": 95,
        "end": 122,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 98,
            "end": 114,
            "left": {
              "type": "BinaryExpression",
              "start": 98,
              "end": 109,
              "left": {
                "type": "UnaryExpression",
                "start": 99,
                "end": 102,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 102,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 107,
                "end": 109,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 112,
              "end": 114,
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
            "start": 95,
            "end": 98,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 114,
            "end": 122,
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
      "start": 124,
      "end": 154,
      "expression": {
        "type": "TemplateLiteral",
        "start": 124,
        "end": 153,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 127,
            "end": 145,
            "left": {
              "type": "BinaryExpression",
              "start": 127,
              "end": 140,
              "left": {
                "type": "UnaryExpression",
                "start": 128,
                "end": 133,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 129,
                  "end": 133,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 133,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 138,
                "end": 140,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 143,
              "end": 145,
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
            "start": 124,
            "end": 127,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 145,
            "end": 153,
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
      "start": 155,
      "end": 185,
      "expression": {
        "type": "TemplateLiteral",
        "start": 155,
        "end": 184,
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
                "type": "UnaryExpression",
                "start": 159,
                "end": 164,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 160,
                  "end": 164,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 162,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 169,
                "end": 171,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 174,
              "end": 176,
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
            "start": 155,
            "end": 158,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 176,
            "end": 184,
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
      "start": 186,
      "end": 218,
      "expression": {
        "type": "TemplateLiteral",
        "start": 186,
        "end": 217,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 189,
            "end": 208,
            "left": {
              "type": "UnaryExpression",
              "start": 190,
              "end": 193,
              "operator": "~",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 191,
                "end": 193,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 198,
              "end": 208,
              "left": {
                "type": "Identifier",
                "start": 198,
                "end": 200,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "start": 204,
                "end": 208,
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
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
            "start": 186,
            "end": 189,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 209,
            "end": 217,
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
      "start": 219,
      "end": 255,
      "expression": {
        "type": "TemplateLiteral",
        "start": 219,
        "end": 254,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 222,
            "end": 245,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 230,
              "end": 244,
              "left": {
                "type": "Identifier",
                "start": 230,
                "end": 232,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 236,
                "end": 244,
                "left": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 238,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 244,
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
            "start": 219,
            "end": 222,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 246,
            "end": 254,
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
      "start": 296,
      "end": 336,
      "expression": {
        "type": "TemplateLiteral",
        "start": 296,
        "end": 335,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 299,
            "end": 308,
            "left": {
              "type": "Identifier",
              "start": 299,
              "end": 301,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "UnaryExpression",
              "start": 305,
              "end": 308,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 306,
                "end": 308,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 324,
            "end": 333,
            "left": {
              "type": "Identifier",
              "start": 324,
              "end": 326,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "UnaryExpression",
              "start": 330,
              "end": 333,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "name": "t2",
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
            "start": 296,
            "end": 299,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 308,
            "end": 324,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 333,
            "end": 335,
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
      "start": 337,
      "end": 391,
      "expression": {
        "type": "TemplateLiteral",
        "start": 337,
        "end": 390,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 340,
            "end": 356,
            "left": {
              "type": "BinaryExpression",
              "start": 340,
              "end": 351,
              "left": {
                "type": "UnaryExpression",
                "start": 341,
                "end": 344,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 344,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 349,
                "end": 351,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 356,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 372,
            "end": 388,
            "left": {
              "type": "BinaryExpression",
              "start": 372,
              "end": 383,
              "left": {
                "type": "UnaryExpression",
                "start": 373,
                "end": 376,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 376,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 381,
                "end": 383,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 386,
              "end": 388,
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
            "start": 337,
            "end": 340,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 356,
            "end": 372,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 388,
            "end": 390,
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
      "start": 392,
      "end": 452,
      "expression": {
        "type": "TemplateLiteral",
        "start": 392,
        "end": 451,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 395,
            "end": 413,
            "left": {
              "type": "BinaryExpression",
              "start": 395,
              "end": 408,
              "left": {
                "type": "UnaryExpression",
                "start": 396,
                "end": 401,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 397,
                  "end": 401,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 401,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 406,
                "end": 408,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 411,
              "end": 413,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 429,
            "end": 449,
            "left": {
              "type": "Identifier",
              "start": 429,
              "end": 431,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 435,
              "end": 449,
              "left": {
                "type": "UnaryExpression",
                "start": 436,
                "end": 441,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 437,
                  "end": 441,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 441,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "**",
              "right": {
                "type": "UnaryExpression",
                "start": 445,
                "end": 449,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 449,
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
            "start": 392,
            "end": 395,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 413,
            "end": 429,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 449,
            "end": 451,
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
      "start": 453,
      "end": 515,
      "expression": {
        "type": "TemplateLiteral",
        "start": 453,
        "end": 514,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 456,
            "end": 474,
            "left": {
              "type": "BinaryExpression",
              "start": 456,
              "end": 469,
              "left": {
                "type": "UnaryExpression",
                "start": 457,
                "end": 462,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 458,
                  "end": 462,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 460,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 467,
                "end": 469,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 472,
              "end": 474,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 490,
            "end": 512,
            "left": {
              "type": "Identifier",
              "start": 490,
              "end": 492,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 496,
              "end": 512,
              "left": {
                "type": "UnaryExpression",
                "start": 497,
                "end": 502,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 498,
                  "end": 502,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 500,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "**",
              "right": {
                "type": "UnaryExpression",
                "start": 508,
                "end": 512,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 512,
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
            "end": 490,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 512,
            "end": 514,
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
      "start": 516,
      "end": 578,
      "expression": {
        "type": "TemplateLiteral",
        "start": 516,
        "end": 577,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 519,
            "end": 538,
            "left": {
              "type": "UnaryExpression",
              "start": 520,
              "end": 523,
              "operator": "~",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 521,
                "end": 523,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 528,
              "end": 538,
              "left": {
                "type": "Identifier",
                "start": 528,
                "end": 530,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "start": 534,
                "end": 538,
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 538,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 555,
            "end": 574,
            "left": {
              "type": "UnaryExpression",
              "start": 556,
              "end": 559,
              "operator": "~",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 557,
                "end": 559,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 564,
              "end": 574,
              "left": {
                "type": "Identifier",
                "start": 564,
                "end": 566,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "start": 570,
                "end": 574,
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 574,
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
            "start": 516,
            "end": 519,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 539,
            "end": 555,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 575,
            "end": 577,
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
      "start": 579,
      "end": 647,
      "expression": {
        "type": "TemplateLiteral",
        "start": 579,
        "end": 646,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 582,
            "end": 605,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 590,
              "end": 604,
              "left": {
                "type": "Identifier",
                "start": 590,
                "end": 592,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 596,
                "end": 604,
                "left": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 598,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 604,
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
            "start": 621,
            "end": 644,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 629,
              "end": 643,
              "left": {
                "type": "Identifier",
                "start": 629,
                "end": 631,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 635,
                "end": 643,
                "left": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 637,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 643,
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
            "start": 579,
            "end": 582,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 605,
            "end": 621,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 644,
            "end": 646,
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
      "start": 670,
      "end": 698,
      "expression": {
        "type": "TemplateLiteral",
        "start": 670,
        "end": 697,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 679,
            "end": 695,
            "left": {
              "type": "BinaryExpression",
              "start": 679,
              "end": 690,
              "left": {
                "type": "UnaryExpression",
                "start": 680,
                "end": 683,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 683,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 688,
                "end": 690,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 693,
              "end": 695,
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
            "start": 670,
            "end": 679,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 695,
            "end": 697,
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
      "start": 699,
      "end": 729,
      "expression": {
        "type": "TemplateLiteral",
        "start": 699,
        "end": 728,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 708,
            "end": 726,
            "left": {
              "type": "BinaryExpression",
              "start": 708,
              "end": 721,
              "left": {
                "type": "UnaryExpression",
                "start": 709,
                "end": 714,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 710,
                  "end": 714,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 714,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 719,
                "end": 721,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 724,
              "end": 726,
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
            "start": 699,
            "end": 708,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 726,
            "end": 728,
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
      "start": 730,
      "end": 760,
      "expression": {
        "type": "TemplateLiteral",
        "start": 730,
        "end": 759,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 739,
            "end": 757,
            "left": {
              "type": "BinaryExpression",
              "start": 739,
              "end": 752,
              "left": {
                "type": "UnaryExpression",
                "start": 740,
                "end": 745,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 741,
                  "end": 745,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 741,
                    "end": 743,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "start": 750,
                "end": 752,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "start": 755,
              "end": 757,
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
            "start": 730,
            "end": 739,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 757,
            "end": 759,
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
      "start": 761,
      "end": 793,
      "expression": {
        "type": "TemplateLiteral",
        "start": 761,
        "end": 792,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 770,
            "end": 789,
            "left": {
              "type": "UnaryExpression",
              "start": 771,
              "end": 774,
              "operator": "~",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 772,
                "end": 774,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "start": 779,
              "end": 789,
              "left": {
                "type": "Identifier",
                "start": 779,
                "end": 781,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "start": 785,
                "end": 789,
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 789,
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
            "start": 761,
            "end": 770,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 790,
            "end": 792,
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
      "start": 794,
      "end": 829,
      "expression": {
        "type": "TemplateLiteral",
        "start": 794,
        "end": 828,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 803,
            "end": 826,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 811,
              "end": 825,
              "left": {
                "type": "Identifier",
                "start": 811,
                "end": 813,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "start": 817,
                "end": 825,
                "left": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 819,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 825,
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
            "start": 794,
            "end": 803,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 826,
            "end": 828,
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
