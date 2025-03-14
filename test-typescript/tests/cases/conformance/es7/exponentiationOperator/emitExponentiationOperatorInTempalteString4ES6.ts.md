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
              "type": "UnaryExpression",
              "start": 82,
              "end": 85,
              "argument": {
                "type": "Identifier",
                "start": 83,
                "end": 85,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "operator": "-",
              "prefix": true
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
            "start": 85,
            "end": 93,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 98,
              "end": 109,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 99,
                "end": 102,
                "argument": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 102,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 107,
                "end": 109,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 112,
              "end": 114,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 95,
            "end": 98,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 114,
            "end": 122,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 127,
              "end": 140,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 128,
                "end": 133,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 129,
                  "end": 133,
                  "argument": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 133,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": true
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 138,
                "end": 140,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 143,
              "end": 145,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 124,
            "end": 127,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 145,
            "end": 153,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 158,
              "end": 171,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 159,
                "end": 164,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 160,
                  "end": 164,
                  "argument": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 162,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 169,
                "end": 171,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 174,
              "end": 176,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 155,
            "end": 158,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 176,
            "end": 184,
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
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "start": 190,
              "end": 193,
              "argument": {
                "type": "Identifier",
                "start": 191,
                "end": 193,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "operator": "~",
              "prefix": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 198,
              "end": 208,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 198,
                "end": 200,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "UpdateExpression",
                "start": 204,
                "end": 208,
                "argument": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
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
            "start": 186,
            "end": 189,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 209,
            "end": 217,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 230,
              "end": 244,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 230,
                "end": 232,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 236,
                "end": 244,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 238,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 244,
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
            "start": 219,
            "end": 222,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 246,
            "end": 254,
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
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 299,
              "end": 301,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 305,
              "end": 308,
              "argument": {
                "type": "Identifier",
                "start": 306,
                "end": 308,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "BinaryExpression",
            "start": 324,
            "end": 333,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 324,
              "end": 326,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 330,
              "end": 333,
              "argument": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "operator": "-",
              "prefix": true
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 296,
            "end": 299,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 308,
            "end": 324,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 333,
            "end": 335,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 340,
              "end": 351,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 341,
                "end": 344,
                "argument": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 344,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 349,
                "end": 351,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 356,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 372,
            "end": 388,
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 372,
              "end": 383,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 373,
                "end": 376,
                "argument": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 376,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 381,
                "end": 383,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 386,
              "end": 388,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 337,
            "end": 340,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 356,
            "end": 372,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 388,
            "end": 390,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 395,
              "end": 408,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 396,
                "end": 401,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 397,
                  "end": 401,
                  "argument": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 401,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": true
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 406,
                "end": 408,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 411,
              "end": 413,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 429,
            "end": 449,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 429,
              "end": 431,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 435,
              "end": 449,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 436,
                "end": 441,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 437,
                  "end": 441,
                  "argument": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 441,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": true
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "UnaryExpression",
                "start": 445,
                "end": 449,
                "argument": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 449,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
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
            "start": 392,
            "end": 395,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 413,
            "end": 429,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 449,
            "end": 451,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 456,
              "end": 469,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 457,
                "end": 462,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 458,
                  "end": 462,
                  "argument": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 460,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 467,
                "end": 469,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 472,
              "end": 474,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 490,
            "end": 512,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 490,
              "end": 492,
              "decorators": [],
              "name": "t2",
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 496,
              "end": 512,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 497,
                "end": 502,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 498,
                  "end": 502,
                  "argument": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 500,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "UnaryExpression",
                "start": 508,
                "end": 512,
                "argument": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 512,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
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
            "start": 453,
            "end": 456,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 474,
            "end": 490,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 512,
            "end": 514,
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
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "start": 520,
              "end": 523,
              "argument": {
                "type": "Identifier",
                "start": 521,
                "end": 523,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "operator": "~",
              "prefix": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 528,
              "end": 538,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 528,
                "end": 530,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "UpdateExpression",
                "start": 534,
                "end": 538,
                "argument": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 538,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "operator": "--",
                "prefix": true
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 555,
            "end": 574,
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "start": 556,
              "end": 559,
              "argument": {
                "type": "Identifier",
                "start": 557,
                "end": 559,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "operator": "~",
              "prefix": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 564,
              "end": 574,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 564,
                "end": 566,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "UpdateExpression",
                "start": 570,
                "end": 574,
                "argument": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 574,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
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
            "start": 516,
            "end": 519,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 539,
            "end": 555,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 575,
            "end": 577,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 590,
              "end": 604,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 590,
                "end": 592,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 596,
                "end": 604,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 598,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 604,
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
            "start": 621,
            "end": 644,
            "argument": {
              "type": "BinaryExpression",
              "start": 629,
              "end": 643,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 629,
                "end": 631,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 635,
                "end": 643,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 637,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 643,
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
            "start": 579,
            "end": 582,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 605,
            "end": 621,
            "tail": false,
            "value": {
              "cooked": " hello world ",
              "raw": " hello world "
            }
          },
          {
            "type": "TemplateElement",
            "start": 644,
            "end": 646,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 679,
              "end": 690,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 680,
                "end": 683,
                "argument": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 683,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 688,
                "end": 690,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 693,
              "end": 695,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 670,
            "end": 679,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 695,
            "end": 697,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 708,
              "end": 721,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 709,
                "end": 714,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 710,
                  "end": 714,
                  "argument": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 714,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": true
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 719,
                "end": 721,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 724,
              "end": 726,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 699,
            "end": 708,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 726,
            "end": 728,
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
            "operator": "-",
            "left": {
              "type": "BinaryExpression",
              "start": 739,
              "end": 752,
              "operator": "**",
              "left": {
                "type": "UnaryExpression",
                "start": 740,
                "end": 745,
                "argument": {
                  "type": "UpdateExpression",
                  "start": 741,
                  "end": 745,
                  "argument": {
                    "type": "Identifier",
                    "start": 741,
                    "end": 743,
                    "decorators": [],
                    "name": "t1",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": false
                },
                "operator": "-",
                "prefix": true
              },
              "right": {
                "type": "Identifier",
                "start": 750,
                "end": 752,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 755,
              "end": 757,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 730,
            "end": 739,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 757,
            "end": 759,
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
            "operator": "**",
            "left": {
              "type": "UnaryExpression",
              "start": 771,
              "end": 774,
              "argument": {
                "type": "Identifier",
                "start": 772,
                "end": 774,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "operator": "~",
              "prefix": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 779,
              "end": 789,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 779,
                "end": 781,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "UpdateExpression",
                "start": 785,
                "end": 789,
                "argument": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 789,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
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
            "start": 761,
            "end": 770,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 790,
            "end": 792,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 811,
              "end": 825,
              "operator": "**",
              "left": {
                "type": "Identifier",
                "start": 811,
                "end": 813,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 817,
                "end": 825,
                "operator": "**",
                "left": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 819,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 825,
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
            "start": 794,
            "end": 803,
            "tail": false,
            "value": {
              "cooked": "hello ",
              "raw": "hello "
            }
          },
          {
            "type": "TemplateElement",
            "start": 826,
            "end": 828,
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
