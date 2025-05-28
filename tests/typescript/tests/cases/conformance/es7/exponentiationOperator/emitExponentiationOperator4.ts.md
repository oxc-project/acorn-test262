__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 646,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 13,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10,
                "end": 13
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 36,
      "expression": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 35,
        "left": {
          "type": "TSTypeAssertion",
          "start": 17,
          "end": 29,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 18,
            "end": 24
          },
          "expression": {
            "type": "Identifier",
            "start": 25,
            "end": 29,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 34,
          "end": 35,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 59,
      "expression": {
        "type": "BinaryExpression",
        "start": 37,
        "end": 58,
        "left": {
          "type": "TSTypeAssertion",
          "start": 38,
          "end": 52,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 39,
            "end": 45
          },
          "expression": {
            "type": "UpdateExpression",
            "start": 46,
            "end": 52,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 48,
              "end": 52,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 57,
          "end": 58,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 82,
      "expression": {
        "type": "BinaryExpression",
        "start": 60,
        "end": 81,
        "left": {
          "type": "TSTypeAssertion",
          "start": 61,
          "end": 75,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 62,
            "end": 68
          },
          "expression": {
            "type": "UpdateExpression",
            "start": 69,
            "end": 75,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 80,
          "end": 81,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 105,
      "expression": {
        "type": "BinaryExpression",
        "start": 83,
        "end": 104,
        "left": {
          "type": "TSTypeAssertion",
          "start": 84,
          "end": 98,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 85,
            "end": 91
          },
          "expression": {
            "type": "UpdateExpression",
            "start": 92,
            "end": 98,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 103,
          "end": 104,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 128,
      "expression": {
        "type": "BinaryExpression",
        "start": 106,
        "end": 127,
        "left": {
          "type": "TSTypeAssertion",
          "start": 107,
          "end": 121,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 108,
            "end": 114
          },
          "expression": {
            "type": "UpdateExpression",
            "start": 115,
            "end": 121,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 115,
              "end": 119,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 126,
          "end": 127,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 157,
      "expression": {
        "type": "BinaryExpression",
        "start": 130,
        "end": 156,
        "left": {
          "type": "Literal",
          "start": 130,
          "end": 131,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 135,
          "end": 156,
          "left": {
            "type": "TSTypeAssertion",
            "start": 136,
            "end": 150,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 137,
              "end": 143
            },
            "expression": {
              "type": "UpdateExpression",
              "start": 144,
              "end": 150,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 146,
                "end": 150,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 155,
            "end": 156,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 185,
      "expression": {
        "type": "BinaryExpression",
        "start": 158,
        "end": 184,
        "left": {
          "type": "Literal",
          "start": 158,
          "end": 159,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 163,
          "end": 184,
          "left": {
            "type": "TSTypeAssertion",
            "start": 164,
            "end": 178,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 165,
              "end": 171
            },
            "expression": {
              "type": "UpdateExpression",
              "start": 172,
              "end": 178,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 174,
                "end": 178,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 183,
            "end": 184,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 213,
      "expression": {
        "type": "BinaryExpression",
        "start": 186,
        "end": 212,
        "left": {
          "type": "Literal",
          "start": 186,
          "end": 187,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 191,
          "end": 212,
          "left": {
            "type": "TSTypeAssertion",
            "start": 192,
            "end": 206,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 193,
              "end": 199
            },
            "expression": {
              "type": "UpdateExpression",
              "start": 200,
              "end": 206,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 200,
                "end": 204,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 211,
            "end": 212,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 241,
      "expression": {
        "type": "BinaryExpression",
        "start": 214,
        "end": 240,
        "left": {
          "type": "Literal",
          "start": 214,
          "end": 215,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 219,
          "end": 240,
          "left": {
            "type": "TSTypeAssertion",
            "start": 220,
            "end": 234,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 221,
              "end": 227
            },
            "expression": {
              "type": "UpdateExpression",
              "start": 228,
              "end": 234,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 228,
                "end": 232,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 239,
            "end": 240,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 262,
      "expression": {
        "type": "BinaryExpression",
        "start": 243,
        "end": 261,
        "left": {
          "type": "UnaryExpression",
          "start": 244,
          "end": 255,
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "start": 249,
            "end": 255,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 251,
              "end": 255,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 260,
          "end": 261,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 282,
      "expression": {
        "type": "BinaryExpression",
        "start": 263,
        "end": 281,
        "left": {
          "type": "UnaryExpression",
          "start": 264,
          "end": 275,
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "start": 269,
            "end": 275,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 280,
          "end": 281,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 283,
      "end": 297,
      "expression": {
        "type": "BinaryExpression",
        "start": 283,
        "end": 296,
        "left": {
          "type": "UnaryExpression",
          "start": 284,
          "end": 290,
          "operator": "void",
          "argument": {
            "type": "Literal",
            "start": 289,
            "end": 290,
            "value": 3,
            "raw": "3"
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 295,
          "end": 296,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 317,
      "expression": {
        "type": "BinaryExpression",
        "start": 298,
        "end": 316,
        "left": {
          "type": "UnaryExpression",
          "start": 299,
          "end": 310,
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "start": 304,
            "end": 310,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 304,
              "end": 308,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 315,
          "end": 316,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 318,
      "end": 337,
      "expression": {
        "type": "BinaryExpression",
        "start": 318,
        "end": 336,
        "left": {
          "type": "UnaryExpression",
          "start": 319,
          "end": 330,
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "start": 324,
            "end": 330,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 324,
              "end": 328,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 335,
          "end": 336,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 364,
      "expression": {
        "type": "BinaryExpression",
        "start": 340,
        "end": 363,
        "left": {
          "type": "Literal",
          "start": 340,
          "end": 341,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 345,
          "end": 363,
          "left": {
            "type": "UnaryExpression",
            "start": 346,
            "end": 357,
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "start": 351,
              "end": 357,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 353,
                "end": 357,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 362,
            "end": 363,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 365,
      "end": 389,
      "expression": {
        "type": "BinaryExpression",
        "start": 365,
        "end": 388,
        "left": {
          "type": "Literal",
          "start": 365,
          "end": 366,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 370,
          "end": 388,
          "left": {
            "type": "UnaryExpression",
            "start": 371,
            "end": 382,
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "start": 376,
              "end": 382,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 376,
                "end": 380,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 387,
            "end": 388,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 409,
      "expression": {
        "type": "BinaryExpression",
        "start": 390,
        "end": 408,
        "left": {
          "type": "Literal",
          "start": 390,
          "end": 391,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 395,
          "end": 408,
          "left": {
            "type": "UnaryExpression",
            "start": 396,
            "end": 402,
            "operator": "void",
            "argument": {
              "type": "Literal",
              "start": 401,
              "end": 402,
              "value": 3,
              "raw": "3"
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 407,
            "end": 408,
            "value": 4,
            "raw": "4"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 410,
      "end": 434,
      "expression": {
        "type": "BinaryExpression",
        "start": 410,
        "end": 433,
        "left": {
          "type": "Literal",
          "start": 410,
          "end": 411,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 415,
          "end": 433,
          "left": {
            "type": "UnaryExpression",
            "start": 416,
            "end": 427,
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "start": 421,
              "end": 427,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 421,
                "end": 425,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 432,
            "end": 433,
            "value": 4,
            "raw": "4"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 435,
      "end": 459,
      "expression": {
        "type": "BinaryExpression",
        "start": 435,
        "end": 458,
        "left": {
          "type": "Literal",
          "start": 435,
          "end": 436,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 440,
          "end": 458,
          "left": {
            "type": "UnaryExpression",
            "start": 441,
            "end": 452,
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "start": 446,
              "end": 452,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 446,
                "end": 450,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 457,
            "end": 458,
            "value": 4,
            "raw": "4"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 461,
      "end": 477,
      "expression": {
        "type": "BinaryExpression",
        "start": 461,
        "end": 476,
        "left": {
          "type": "UnaryExpression",
          "start": 462,
          "end": 470,
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "start": 464,
            "end": 470,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 466,
              "end": 470,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 475,
          "end": 476,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 494,
      "expression": {
        "type": "BinaryExpression",
        "start": 478,
        "end": 493,
        "left": {
          "type": "UnaryExpression",
          "start": 479,
          "end": 487,
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "start": 481,
            "end": 487,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 481,
              "end": 485,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 492,
          "end": 493,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 506,
      "expression": {
        "type": "BinaryExpression",
        "start": 495,
        "end": 505,
        "left": {
          "type": "UnaryExpression",
          "start": 496,
          "end": 499,
          "operator": "~",
          "argument": {
            "type": "Literal",
            "start": 498,
            "end": 499,
            "value": 3,
            "raw": "3"
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 504,
          "end": 505,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 507,
      "end": 523,
      "expression": {
        "type": "BinaryExpression",
        "start": 507,
        "end": 522,
        "left": {
          "type": "UnaryExpression",
          "start": 508,
          "end": 516,
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "start": 510,
            "end": 516,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 510,
              "end": 514,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 521,
          "end": 522,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 524,
      "end": 540,
      "expression": {
        "type": "BinaryExpression",
        "start": 524,
        "end": 539,
        "left": {
          "type": "UnaryExpression",
          "start": 525,
          "end": 533,
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "start": 527,
            "end": 533,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 527,
              "end": 531,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "prefix": true
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 538,
          "end": 539,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 542,
      "end": 563,
      "expression": {
        "type": "BinaryExpression",
        "start": 542,
        "end": 562,
        "left": {
          "type": "Literal",
          "start": 542,
          "end": 543,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 547,
          "end": 562,
          "left": {
            "type": "UnaryExpression",
            "start": 548,
            "end": 556,
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "start": 550,
              "end": 556,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 552,
                "end": 556,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 561,
            "end": 562,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 564,
      "end": 585,
      "expression": {
        "type": "BinaryExpression",
        "start": 564,
        "end": 584,
        "left": {
          "type": "Literal",
          "start": 564,
          "end": 565,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 569,
          "end": 584,
          "left": {
            "type": "UnaryExpression",
            "start": 570,
            "end": 578,
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "start": 572,
              "end": 578,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 572,
                "end": 576,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 583,
            "end": 584,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 586,
      "end": 602,
      "expression": {
        "type": "BinaryExpression",
        "start": 586,
        "end": 601,
        "left": {
          "type": "Literal",
          "start": 586,
          "end": 587,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 591,
          "end": 601,
          "left": {
            "type": "UnaryExpression",
            "start": 592,
            "end": 595,
            "operator": "~",
            "argument": {
              "type": "Literal",
              "start": 594,
              "end": 595,
              "value": 3,
              "raw": "3"
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 600,
            "end": 601,
            "value": 4,
            "raw": "4"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 603,
      "end": 624,
      "expression": {
        "type": "BinaryExpression",
        "start": 603,
        "end": 623,
        "left": {
          "type": "Literal",
          "start": 603,
          "end": 604,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 608,
          "end": 623,
          "left": {
            "type": "UnaryExpression",
            "start": 609,
            "end": 617,
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "start": 611,
              "end": 617,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 611,
                "end": 615,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 622,
            "end": 623,
            "value": 4,
            "raw": "4"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 625,
      "end": 646,
      "expression": {
        "type": "BinaryExpression",
        "start": 625,
        "end": 645,
        "left": {
          "type": "Literal",
          "start": 625,
          "end": 626,
          "value": 1,
          "raw": "1"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 630,
          "end": 645,
          "left": {
            "type": "UnaryExpression",
            "start": 631,
            "end": 639,
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "start": 633,
              "end": 639,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 633,
                "end": 637,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 644,
            "end": 645,
            "value": 4,
            "raw": "4"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
