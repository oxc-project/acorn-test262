__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 798,
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
            "end": 25,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 28,
            "end": 30,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 45,
      "expression": {
        "type": "BinaryExpression",
        "start": 33,
        "end": 44,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 33,
          "end": 39,
          "argument": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 43,
          "end": 44,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 58,
      "expression": {
        "type": "BinaryExpression",
        "start": 46,
        "end": 57,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 46,
          "end": 52,
          "argument": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 56,
          "end": 57,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 71,
      "expression": {
        "type": "BinaryExpression",
        "start": 59,
        "end": 70,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 59,
          "end": 65,
          "argument": {
            "type": "Identifier",
            "start": 59,
            "end": 63,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": false
        },
        "right": {
          "type": "Literal",
          "start": 69,
          "end": 70,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 84,
      "expression": {
        "type": "BinaryExpression",
        "start": 72,
        "end": 83,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 72,
          "end": 78,
          "argument": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "Literal",
          "start": 82,
          "end": 83,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 104,
      "expression": {
        "type": "BinaryExpression",
        "start": 85,
        "end": 103,
        "operator": "+",
        "left": {
          "type": "UpdateExpression",
          "start": 85,
          "end": 91,
          "argument": {
            "type": "Identifier",
            "start": 87,
            "end": 91,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 94,
          "end": 103,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 124,
      "expression": {
        "type": "BinaryExpression",
        "start": 105,
        "end": 123,
        "operator": "-",
        "left": {
          "type": "UpdateExpression",
          "start": 105,
          "end": 111,
          "argument": {
            "type": "Identifier",
            "start": 107,
            "end": 111,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 114,
          "end": 123,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 122,
            "end": 123,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 144,
      "expression": {
        "type": "BinaryExpression",
        "start": 125,
        "end": 143,
        "operator": "*",
        "left": {
          "type": "UpdateExpression",
          "start": 125,
          "end": 131,
          "argument": {
            "type": "Identifier",
            "start": 127,
            "end": 131,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 134,
          "end": 143,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 142,
            "end": 143,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 164,
      "expression": {
        "type": "BinaryExpression",
        "start": 145,
        "end": 163,
        "operator": "/",
        "left": {
          "type": "UpdateExpression",
          "start": 145,
          "end": 151,
          "argument": {
            "type": "Identifier",
            "start": 147,
            "end": 151,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 154,
          "end": 163,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 154,
            "end": 158,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 162,
            "end": 163,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 184,
      "expression": {
        "type": "BinaryExpression",
        "start": 165,
        "end": 183,
        "operator": "%",
        "left": {
          "type": "UpdateExpression",
          "start": 165,
          "end": 171,
          "argument": {
            "type": "Identifier",
            "start": 167,
            "end": 171,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 174,
          "end": 183,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 174,
            "end": 178,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 182,
            "end": 183,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 197,
      "expression": {
        "type": "BinaryExpression",
        "start": 185,
        "end": 196,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 185,
          "end": 191,
          "argument": {
            "type": "Identifier",
            "start": 185,
            "end": 189,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "Literal",
          "start": 195,
          "end": 196,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 210,
      "expression": {
        "type": "BinaryExpression",
        "start": 198,
        "end": 209,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 198,
          "end": 204,
          "argument": {
            "type": "Identifier",
            "start": 198,
            "end": 202,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": false
        },
        "right": {
          "type": "Literal",
          "start": 208,
          "end": 209,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 227,
      "expression": {
        "type": "BinaryExpression",
        "start": 211,
        "end": 226,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 211,
          "end": 217,
          "argument": {
            "type": "Identifier",
            "start": 211,
            "end": 215,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 221,
          "end": 226,
          "argument": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 244,
      "expression": {
        "type": "BinaryExpression",
        "start": 228,
        "end": 243,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 228,
          "end": 234,
          "argument": {
            "type": "Identifier",
            "start": 228,
            "end": 232,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 238,
          "end": 243,
          "argument": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "+",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 265,
      "expression": {
        "type": "BinaryExpression",
        "start": 246,
        "end": 264,
        "operator": "+",
        "left": {
          "type": "UpdateExpression",
          "start": 246,
          "end": 252,
          "argument": {
            "type": "Identifier",
            "start": 246,
            "end": 250,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 255,
          "end": 264,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 255,
            "end": 259,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 263,
            "end": 264,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 285,
      "expression": {
        "type": "BinaryExpression",
        "start": 266,
        "end": 284,
        "operator": "-",
        "left": {
          "type": "UpdateExpression",
          "start": 266,
          "end": 272,
          "argument": {
            "type": "Identifier",
            "start": 266,
            "end": 270,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 275,
          "end": 284,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 275,
            "end": 279,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 283,
            "end": 284,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 305,
      "expression": {
        "type": "BinaryExpression",
        "start": 286,
        "end": 304,
        "operator": "*",
        "left": {
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
        "right": {
          "type": "BinaryExpression",
          "start": 295,
          "end": 304,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 295,
            "end": 299,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 303,
            "end": 304,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 325,
      "expression": {
        "type": "BinaryExpression",
        "start": 306,
        "end": 324,
        "operator": "/",
        "left": {
          "type": "UpdateExpression",
          "start": 306,
          "end": 312,
          "argument": {
            "type": "Identifier",
            "start": 306,
            "end": 310,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 315,
          "end": 324,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 315,
            "end": 319,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 323,
            "end": 324,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 345,
      "expression": {
        "type": "BinaryExpression",
        "start": 326,
        "end": 344,
        "operator": "%",
        "left": {
          "type": "UpdateExpression",
          "start": 326,
          "end": 332,
          "argument": {
            "type": "Identifier",
            "start": 326,
            "end": 330,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 335,
          "end": 344,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 335,
            "end": 339,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 343,
            "end": 344,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 347,
      "end": 363,
      "expression": {
        "type": "BinaryExpression",
        "start": 347,
        "end": 362,
        "operator": "+",
        "left": {
          "type": "UpdateExpression",
          "start": 347,
          "end": 353,
          "argument": {
            "type": "Identifier",
            "start": 349,
            "end": 353,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 356,
          "end": 362,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 356,
            "end": 357,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 361,
            "end": 362,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 364,
      "end": 380,
      "expression": {
        "type": "BinaryExpression",
        "start": 364,
        "end": 379,
        "operator": "-",
        "left": {
          "type": "UpdateExpression",
          "start": 364,
          "end": 370,
          "argument": {
            "type": "Identifier",
            "start": 366,
            "end": 370,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 373,
          "end": 379,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 373,
            "end": 374,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 378,
            "end": 379,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 397,
      "expression": {
        "type": "BinaryExpression",
        "start": 381,
        "end": 396,
        "operator": "*",
        "left": {
          "type": "UpdateExpression",
          "start": 381,
          "end": 387,
          "argument": {
            "type": "Identifier",
            "start": 383,
            "end": 387,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 390,
          "end": 396,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 390,
            "end": 391,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 395,
            "end": 396,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 398,
      "end": 414,
      "expression": {
        "type": "BinaryExpression",
        "start": 398,
        "end": 413,
        "operator": "/",
        "left": {
          "type": "UpdateExpression",
          "start": 398,
          "end": 404,
          "argument": {
            "type": "Identifier",
            "start": 400,
            "end": 404,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 407,
          "end": 413,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 407,
            "end": 408,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 412,
            "end": 413,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 431,
      "expression": {
        "type": "BinaryExpression",
        "start": 415,
        "end": 430,
        "operator": "%",
        "left": {
          "type": "UpdateExpression",
          "start": 415,
          "end": 421,
          "argument": {
            "type": "Identifier",
            "start": 417,
            "end": 421,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 424,
          "end": 430,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 424,
            "end": 425,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 429,
            "end": 430,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 449,
      "expression": {
        "type": "BinaryExpression",
        "start": 433,
        "end": 448,
        "operator": "+",
        "left": {
          "type": "UpdateExpression",
          "start": 433,
          "end": 439,
          "argument": {
            "type": "Identifier",
            "start": 435,
            "end": 439,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 442,
          "end": 448,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 442,
            "end": 443,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 447,
            "end": 448,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 466,
      "expression": {
        "type": "BinaryExpression",
        "start": 450,
        "end": 465,
        "operator": "-",
        "left": {
          "type": "UpdateExpression",
          "start": 450,
          "end": 456,
          "argument": {
            "type": "Identifier",
            "start": 452,
            "end": 456,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 459,
          "end": 465,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 459,
            "end": 460,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 464,
            "end": 465,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 483,
      "expression": {
        "type": "BinaryExpression",
        "start": 467,
        "end": 482,
        "operator": "*",
        "left": {
          "type": "UpdateExpression",
          "start": 467,
          "end": 473,
          "argument": {
            "type": "Identifier",
            "start": 469,
            "end": 473,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 476,
          "end": 482,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 476,
            "end": 477,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 481,
            "end": 482,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 484,
      "end": 500,
      "expression": {
        "type": "BinaryExpression",
        "start": 484,
        "end": 499,
        "operator": "/",
        "left": {
          "type": "UpdateExpression",
          "start": 484,
          "end": 490,
          "argument": {
            "type": "Identifier",
            "start": 486,
            "end": 490,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 493,
          "end": 499,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 493,
            "end": 494,
            "raw": "2",
            "value": 2
          },
          "right": {
            "type": "Literal",
            "start": 498,
            "end": 499,
            "raw": "3",
            "value": 3
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 502,
      "end": 514,
      "expression": {
        "type": "BinaryExpression",
        "start": 502,
        "end": 513,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 502,
          "end": 503,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UpdateExpression",
          "start": 507,
          "end": 513,
          "argument": {
            "type": "Identifier",
            "start": 509,
            "end": 513,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 515,
      "end": 527,
      "expression": {
        "type": "BinaryExpression",
        "start": 515,
        "end": 526,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 515,
          "end": 516,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UpdateExpression",
          "start": 520,
          "end": 526,
          "argument": {
            "type": "Identifier",
            "start": 522,
            "end": 526,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 528,
      "end": 540,
      "expression": {
        "type": "BinaryExpression",
        "start": 528,
        "end": 539,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 528,
          "end": 529,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UpdateExpression",
          "start": 533,
          "end": 539,
          "argument": {
            "type": "Identifier",
            "start": 533,
            "end": 537,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "++",
          "prefix": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 553,
      "expression": {
        "type": "BinaryExpression",
        "start": 541,
        "end": 552,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 541,
          "end": 542,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UpdateExpression",
          "start": 546,
          "end": 552,
          "argument": {
            "type": "Identifier",
            "start": 546,
            "end": 550,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "operator": "--",
          "prefix": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 555,
      "end": 572,
      "expression": {
        "type": "BinaryExpression",
        "start": 555,
        "end": 571,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 555,
          "end": 556,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 560,
          "end": 571,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 560,
            "end": 566,
            "argument": {
              "type": "Identifier",
              "start": 562,
              "end": 566,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 570,
            "end": 571,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 573,
      "end": 590,
      "expression": {
        "type": "BinaryExpression",
        "start": 573,
        "end": 589,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 573,
          "end": 574,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 578,
          "end": 589,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 578,
            "end": 584,
            "argument": {
              "type": "Identifier",
              "start": 580,
              "end": 584,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 588,
            "end": 589,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 608,
      "expression": {
        "type": "BinaryExpression",
        "start": 591,
        "end": 607,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 591,
          "end": 592,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 596,
          "end": 607,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 596,
            "end": 602,
            "argument": {
              "type": "Identifier",
              "start": 596,
              "end": 600,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": false
          },
          "right": {
            "type": "Literal",
            "start": 606,
            "end": 607,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 609,
      "end": 626,
      "expression": {
        "type": "BinaryExpression",
        "start": 609,
        "end": 625,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 609,
          "end": 610,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 614,
          "end": 625,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 614,
            "end": 620,
            "argument": {
              "type": "Identifier",
              "start": 614,
              "end": 618,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": false
          },
          "right": {
            "type": "Literal",
            "start": 624,
            "end": 625,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 628,
      "end": 644,
      "expression": {
        "type": "BinaryExpression",
        "start": 628,
        "end": 643,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 628,
          "end": 639,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 628,
            "end": 629,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 633,
            "end": 639,
            "argument": {
              "type": "Identifier",
              "start": 635,
              "end": 639,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 642,
          "end": 643,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 661,
      "expression": {
        "type": "BinaryExpression",
        "start": 645,
        "end": 660,
        "operator": "-",
        "left": {
          "type": "BinaryExpression",
          "start": 645,
          "end": 656,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 645,
            "end": 646,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 650,
            "end": 656,
            "argument": {
              "type": "Identifier",
              "start": 652,
              "end": 656,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 659,
          "end": 660,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 662,
      "end": 678,
      "expression": {
        "type": "BinaryExpression",
        "start": 662,
        "end": 677,
        "operator": "*",
        "left": {
          "type": "BinaryExpression",
          "start": 662,
          "end": 673,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 662,
            "end": 663,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 667,
            "end": 673,
            "argument": {
              "type": "Identifier",
              "start": 669,
              "end": 673,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 676,
          "end": 677,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 679,
      "end": 695,
      "expression": {
        "type": "BinaryExpression",
        "start": 679,
        "end": 694,
        "operator": "/",
        "left": {
          "type": "BinaryExpression",
          "start": 679,
          "end": 690,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 679,
            "end": 680,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 684,
            "end": 690,
            "argument": {
              "type": "Identifier",
              "start": 686,
              "end": 690,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 693,
          "end": 694,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 696,
      "end": 712,
      "expression": {
        "type": "BinaryExpression",
        "start": 696,
        "end": 711,
        "operator": "%",
        "left": {
          "type": "BinaryExpression",
          "start": 696,
          "end": 707,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 696,
            "end": 697,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 701,
            "end": 707,
            "argument": {
              "type": "Identifier",
              "start": 703,
              "end": 707,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "++",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 710,
          "end": 711,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 714,
      "end": 730,
      "expression": {
        "type": "BinaryExpression",
        "start": 714,
        "end": 729,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 714,
          "end": 725,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 714,
            "end": 715,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 719,
            "end": 725,
            "argument": {
              "type": "Identifier",
              "start": 721,
              "end": 725,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 728,
          "end": 729,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 731,
      "end": 747,
      "expression": {
        "type": "BinaryExpression",
        "start": 731,
        "end": 746,
        "operator": "-",
        "left": {
          "type": "BinaryExpression",
          "start": 731,
          "end": 742,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 731,
            "end": 732,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 736,
            "end": 742,
            "argument": {
              "type": "Identifier",
              "start": 738,
              "end": 742,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 745,
          "end": 746,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 748,
      "end": 764,
      "expression": {
        "type": "BinaryExpression",
        "start": 748,
        "end": 763,
        "operator": "*",
        "left": {
          "type": "BinaryExpression",
          "start": 748,
          "end": 759,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 748,
            "end": 749,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 753,
            "end": 759,
            "argument": {
              "type": "Identifier",
              "start": 755,
              "end": 759,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 762,
          "end": 763,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 765,
      "end": 781,
      "expression": {
        "type": "BinaryExpression",
        "start": 765,
        "end": 780,
        "operator": "/",
        "left": {
          "type": "BinaryExpression",
          "start": 765,
          "end": 776,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 765,
            "end": 766,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 770,
            "end": 776,
            "argument": {
              "type": "Identifier",
              "start": 772,
              "end": 776,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 779,
          "end": 780,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 782,
      "end": 798,
      "expression": {
        "type": "BinaryExpression",
        "start": 782,
        "end": 797,
        "operator": "%",
        "left": {
          "type": "BinaryExpression",
          "start": 782,
          "end": 793,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 782,
            "end": 783,
            "raw": "3",
            "value": 3
          },
          "right": {
            "type": "UpdateExpression",
            "start": 787,
            "end": 793,
            "argument": {
              "type": "Identifier",
              "start": 789,
              "end": 793,
              "decorators": [],
              "name": "temp",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 796,
          "end": 797,
          "raw": "2",
          "value": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
