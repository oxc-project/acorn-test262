emitExponentiationOperator4.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 663,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 30,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 53,
      "expression": {
        "type": "BinaryExpression",
        "start": 33,
        "end": 52,
        "operator": "**",
        "left": {
          "type": "TSTypeAssertion",
          "start": 34,
          "end": 46,
          "expression": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 35,
            "end": 41
          }
        },
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 52,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 76,
      "expression": {
        "type": "BinaryExpression",
        "start": 54,
        "end": 75,
        "operator": "**",
        "left": {
          "type": "TSTypeAssertion",
          "start": 55,
          "end": 69,
          "expression": {
            "type": "UpdateExpression",
            "start": 63,
            "end": 69,
            "argument": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 56,
            "end": 62
          }
        },
        "right": {
          "type": "Literal",
          "start": 74,
          "end": 75,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 99,
      "expression": {
        "type": "BinaryExpression",
        "start": 77,
        "end": 98,
        "operator": "**",
        "left": {
          "type": "TSTypeAssertion",
          "start": 78,
          "end": 92,
          "expression": {
            "type": "UpdateExpression",
            "start": 86,
            "end": 92,
            "argument": {
              "type": "Identifier",
              "start": 88,
              "end": 92,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": true
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 79,
            "end": 85
          }
        },
        "right": {
          "type": "Literal",
          "start": 97,
          "end": 98,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 122,
      "expression": {
        "type": "BinaryExpression",
        "start": 100,
        "end": 121,
        "operator": "**",
        "left": {
          "type": "TSTypeAssertion",
          "start": 101,
          "end": 115,
          "expression": {
            "type": "UpdateExpression",
            "start": 109,
            "end": 115,
            "argument": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 102,
            "end": 108
          }
        },
        "right": {
          "type": "Literal",
          "start": 120,
          "end": 121,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 145,
      "expression": {
        "type": "BinaryExpression",
        "start": 123,
        "end": 144,
        "operator": "**",
        "left": {
          "type": "TSTypeAssertion",
          "start": 124,
          "end": 138,
          "expression": {
            "type": "UpdateExpression",
            "start": 132,
            "end": 138,
            "argument": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 125,
            "end": 131
          }
        },
        "right": {
          "type": "Literal",
          "start": 143,
          "end": 144,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 174,
      "expression": {
        "type": "BinaryExpression",
        "start": 147,
        "end": 173,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 147,
          "end": 148,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 152,
          "end": 173,
          "operator": "**",
          "left": {
            "type": "TSTypeAssertion",
            "start": 153,
            "end": 167,
            "expression": {
              "type": "UpdateExpression",
              "start": 161,
              "end": 167,
              "argument": {
                "type": "Identifier",
                "start": 163,
                "end": 167,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "--",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 154,
              "end": 160
            }
          },
          "right": {
            "type": "Literal",
            "start": 172,
            "end": 173,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 202,
      "expression": {
        "type": "BinaryExpression",
        "start": 175,
        "end": 201,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 175,
          "end": 176,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 180,
          "end": 201,
          "operator": "**",
          "left": {
            "type": "TSTypeAssertion",
            "start": 181,
            "end": 195,
            "expression": {
              "type": "UpdateExpression",
              "start": 189,
              "end": 195,
              "argument": {
                "type": "Identifier",
                "start": 191,
                "end": 195,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "++",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 182,
              "end": 188
            }
          },
          "right": {
            "type": "Literal",
            "start": 200,
            "end": 201,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 230,
      "expression": {
        "type": "BinaryExpression",
        "start": 203,
        "end": 229,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 203,
          "end": 204,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 208,
          "end": 229,
          "operator": "**",
          "left": {
            "type": "TSTypeAssertion",
            "start": 209,
            "end": 223,
            "expression": {
              "type": "UpdateExpression",
              "start": 217,
              "end": 223,
              "argument": {
                "type": "Identifier",
                "start": 217,
                "end": 221,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "--",
              "prefix": false
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 210,
              "end": 216
            }
          },
          "right": {
            "type": "Literal",
            "start": 228,
            "end": 229,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 258,
      "expression": {
        "type": "BinaryExpression",
        "start": 231,
        "end": 257,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 231,
          "end": 232,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 236,
          "end": 257,
          "operator": "**",
          "left": {
            "type": "TSTypeAssertion",
            "start": 237,
            "end": 251,
            "expression": {
              "type": "UpdateExpression",
              "start": 245,
              "end": 251,
              "argument": {
                "type": "Identifier",
                "start": 245,
                "end": 249,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 238,
              "end": 244
            }
          },
          "right": {
            "type": "Literal",
            "start": 256,
            "end": 257,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 279,
      "expression": {
        "type": "BinaryExpression",
        "start": 260,
        "end": 278,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 261,
          "end": 272,
          "argument": {
            "type": "UpdateExpression",
            "start": 266,
            "end": 272,
            "argument": {
              "type": "Identifier",
              "start": 268,
              "end": 272,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          },
          "operator": "void",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 277,
          "end": 278,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 299,
      "expression": {
        "type": "BinaryExpression",
        "start": 280,
        "end": 298,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 281,
          "end": 292,
          "argument": {
            "type": "UpdateExpression",
            "start": 286,
            "end": 292,
            "argument": {
              "type": "Identifier",
              "start": 286,
              "end": 290,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": false
          },
          "operator": "void",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 297,
          "end": 298,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 314,
      "expression": {
        "type": "BinaryExpression",
        "start": 300,
        "end": 313,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 301,
          "end": 307,
          "argument": {
            "type": "Literal",
            "start": 306,
            "end": 307,
            "raw": "3",
            "value": 3
          },
          "operator": "void",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 312,
          "end": 313,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 334,
      "expression": {
        "type": "BinaryExpression",
        "start": 315,
        "end": 333,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 316,
          "end": 327,
          "argument": {
            "type": "UpdateExpression",
            "start": 321,
            "end": 327,
            "argument": {
              "type": "Identifier",
              "start": 321,
              "end": 325,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": false
          },
          "operator": "void",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 332,
          "end": 333,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 335,
      "end": 354,
      "expression": {
        "type": "BinaryExpression",
        "start": 335,
        "end": 353,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 336,
          "end": 347,
          "argument": {
            "type": "UpdateExpression",
            "start": 341,
            "end": 347,
            "argument": {
              "type": "Identifier",
              "start": 341,
              "end": 345,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": false
          },
          "operator": "void",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 352,
          "end": 353,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 381,
      "expression": {
        "type": "BinaryExpression",
        "start": 357,
        "end": 380,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 357,
          "end": 358,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 362,
          "end": 380,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 363,
            "end": 374,
            "argument": {
              "type": "UpdateExpression",
              "start": 368,
              "end": 374,
              "argument": {
                "type": "Identifier",
                "start": 370,
                "end": 374,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "--",
              "prefix": true
            },
            "operator": "void",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 379,
            "end": 380,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 382,
      "end": 406,
      "expression": {
        "type": "BinaryExpression",
        "start": 382,
        "end": 405,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 382,
          "end": 383,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 387,
          "end": 405,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 388,
            "end": 399,
            "argument": {
              "type": "UpdateExpression",
              "start": 393,
              "end": 399,
              "argument": {
                "type": "Identifier",
                "start": 393,
                "end": 397,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "--",
              "prefix": false
            },
            "operator": "void",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 404,
            "end": 405,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 407,
      "end": 426,
      "expression": {
        "type": "BinaryExpression",
        "start": 407,
        "end": 425,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 407,
          "end": 408,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 412,
          "end": 425,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 413,
            "end": 419,
            "argument": {
              "type": "Literal",
              "start": 418,
              "end": 419,
              "raw": "3",
              "value": 3
            },
            "operator": "void",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 424,
            "end": 425,
            "raw": "4",
            "value": 4
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 451,
      "expression": {
        "type": "BinaryExpression",
        "start": 427,
        "end": 450,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 427,
          "end": 428,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 432,
          "end": 450,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 433,
            "end": 444,
            "argument": {
              "type": "UpdateExpression",
              "start": 438,
              "end": 444,
              "argument": {
                "type": "Identifier",
                "start": 438,
                "end": 442,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            },
            "operator": "void",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 449,
            "end": 450,
            "raw": "4",
            "value": 4
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 452,
      "end": 476,
      "expression": {
        "type": "BinaryExpression",
        "start": 452,
        "end": 475,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 452,
          "end": 453,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 457,
          "end": 475,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 458,
            "end": 469,
            "argument": {
              "type": "UpdateExpression",
              "start": 463,
              "end": 469,
              "argument": {
                "type": "Identifier",
                "start": 463,
                "end": 467,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "--",
              "prefix": false
            },
            "operator": "void",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 474,
            "end": 475,
            "raw": "4",
            "value": 4
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 494,
      "expression": {
        "type": "BinaryExpression",
        "start": 478,
        "end": 493,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 479,
          "end": 487,
          "argument": {
            "type": "UpdateExpression",
            "start": 481,
            "end": 487,
            "argument": {
              "type": "Identifier",
              "start": 483,
              "end": 487,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          },
          "operator": "~",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 492,
          "end": 493,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 511,
      "expression": {
        "type": "BinaryExpression",
        "start": 495,
        "end": 510,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 496,
          "end": 504,
          "argument": {
            "type": "UpdateExpression",
            "start": 498,
            "end": 504,
            "argument": {
              "type": "Identifier",
              "start": 498,
              "end": 502,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": false
          },
          "operator": "~",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 509,
          "end": 510,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 523,
      "expression": {
        "type": "BinaryExpression",
        "start": 512,
        "end": 522,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 513,
          "end": 516,
          "argument": {
            "type": "Literal",
            "start": 515,
            "end": 516,
            "raw": "3",
            "value": 3
          },
          "operator": "~",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 521,
          "end": 522,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 524,
      "end": 540,
      "expression": {
        "type": "BinaryExpression",
        "start": 524,
        "end": 539,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 525,
          "end": 533,
          "argument": {
            "type": "UpdateExpression",
            "start": 527,
            "end": 533,
            "argument": {
              "type": "Identifier",
              "start": 527,
              "end": 531,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": false
          },
          "operator": "~",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 538,
          "end": 539,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 557,
      "expression": {
        "type": "BinaryExpression",
        "start": 541,
        "end": 556,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 542,
          "end": 550,
          "argument": {
            "type": "UpdateExpression",
            "start": 544,
            "end": 550,
            "argument": {
              "type": "Identifier",
              "start": 544,
              "end": 548,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": false
          },
          "operator": "~",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 555,
          "end": 556,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 559,
      "end": 580,
      "expression": {
        "type": "BinaryExpression",
        "start": 559,
        "end": 579,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 559,
          "end": 560,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 564,
          "end": 579,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 565,
            "end": 573,
            "argument": {
              "type": "UpdateExpression",
              "start": 567,
              "end": 573,
              "argument": {
                "type": "Identifier",
                "start": 569,
                "end": 573,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "--",
              "prefix": true
            },
            "operator": "~",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 578,
            "end": 579,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 581,
      "end": 602,
      "expression": {
        "type": "BinaryExpression",
        "start": 581,
        "end": 601,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 581,
          "end": 582,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 586,
          "end": 601,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 587,
            "end": 595,
            "argument": {
              "type": "UpdateExpression",
              "start": 589,
              "end": 595,
              "argument": {
                "type": "Identifier",
                "start": 589,
                "end": 593,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "--",
              "prefix": false
            },
            "operator": "~",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 600,
            "end": 601,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 603,
      "end": 619,
      "expression": {
        "type": "BinaryExpression",
        "start": 603,
        "end": 618,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 603,
          "end": 604,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 608,
          "end": 618,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 609,
            "end": 612,
            "argument": {
              "type": "Literal",
              "start": 611,
              "end": 612,
              "raw": "3",
              "value": 3
            },
            "operator": "~",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 617,
            "end": 618,
            "raw": "4",
            "value": 4
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 620,
      "end": 641,
      "expression": {
        "type": "BinaryExpression",
        "start": 620,
        "end": 640,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 620,
          "end": 621,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 625,
          "end": 640,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 626,
            "end": 634,
            "argument": {
              "type": "UpdateExpression",
              "start": 628,
              "end": 634,
              "argument": {
                "type": "Identifier",
                "start": 628,
                "end": 632,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            },
            "operator": "~",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 639,
            "end": 640,
            "raw": "4",
            "value": 4
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 642,
      "end": 663,
      "expression": {
        "type": "BinaryExpression",
        "start": 642,
        "end": 662,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 642,
          "end": 643,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "BinaryExpression",
          "start": 647,
          "end": 662,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 648,
            "end": 656,
            "argument": {
              "type": "UpdateExpression",
              "start": 650,
              "end": 656,
              "argument": {
                "type": "Identifier",
                "start": 650,
                "end": 654,
                "decorators": [],
                "name": "temp",
                "optional": false
              },
              "operator": "--",
              "prefix": false
            },
            "operator": "~",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 661,
            "end": 662,
            "raw": "4",
            "value": 4
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
