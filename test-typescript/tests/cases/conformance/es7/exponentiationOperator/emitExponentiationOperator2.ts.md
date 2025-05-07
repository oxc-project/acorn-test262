__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 781,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 11,
            "end": 13,
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
      "type": "ExpressionStatement",
      "start": 16,
      "end": 28,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 27,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 16,
          "end": 22,
          "argument": {
            "type": "Identifier",
            "start": 18,
            "end": 22,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 26,
          "end": 27,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 41,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 29,
        "end": 40,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 29,
          "end": 35,
          "argument": {
            "type": "Identifier",
            "start": 31,
            "end": 35,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 39,
          "end": 40,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 54,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 42,
        "end": 53,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 42,
          "end": 48,
          "argument": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": false
        },
        "right": {
          "type": "Literal",
          "start": 52,
          "end": 53,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 67,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 55,
        "end": 66,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 55,
          "end": 61,
          "argument": {
            "type": "Identifier",
            "start": 55,
            "end": 59,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "Literal",
          "start": 65,
          "end": 66,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 87,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 68,
        "end": 86,
        "operator": "+",
        "left": {
          "type": "UpdateExpression",
          "start": 68,
          "end": 74,
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 74,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 77,
          "end": 86,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 85,
            "end": 86,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 107,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 88,
        "end": 106,
        "operator": "-",
        "left": {
          "type": "UpdateExpression",
          "start": 88,
          "end": 94,
          "argument": {
            "type": "Identifier",
            "start": 90,
            "end": 94,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 97,
          "end": 106,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 105,
            "end": 106,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 127,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 108,
        "end": 126,
        "operator": "*",
        "left": {
          "type": "UpdateExpression",
          "start": 108,
          "end": 114,
          "argument": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 117,
          "end": 126,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 125,
            "end": 126,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 128,
        "end": 146,
        "operator": "/",
        "left": {
          "type": "UpdateExpression",
          "start": 128,
          "end": 134,
          "argument": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 137,
          "end": 146,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 137,
            "end": 141,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 145,
            "end": 146,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 148,
        "end": 166,
        "operator": "%",
        "left": {
          "type": "UpdateExpression",
          "start": 148,
          "end": 154,
          "argument": {
            "type": "Identifier",
            "start": 150,
            "end": 154,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 157,
          "end": 166,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 165,
            "end": 166,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 180,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 168,
        "end": 179,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 168,
          "end": 174,
          "argument": {
            "type": "Identifier",
            "start": 168,
            "end": 172,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "Literal",
          "start": 178,
          "end": 179,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 193,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 181,
        "end": 192,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 181,
          "end": 187,
          "argument": {
            "type": "Identifier",
            "start": 181,
            "end": 185,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": false
        },
        "right": {
          "type": "Literal",
          "start": 191,
          "end": 192,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 210,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 194,
        "end": 209,
        "operator": "**",
        "left": {
          "type": "UpdateExpression",
          "start": 194,
          "end": 200,
          "argument": {
            "type": "Identifier",
            "start": 194,
            "end": 198,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 204,
          "end": 209,
          "argument": {
            "type": "Identifier",
            "start": 205,
            "end": 209,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 227,
      "directive": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
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
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "+",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 248,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 229,
        "end": 247,
        "operator": "+",
        "left": {
          "type": "UpdateExpression",
          "start": 229,
          "end": 235,
          "argument": {
            "type": "Identifier",
            "start": 229,
            "end": 233,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 238,
          "end": 247,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 246,
            "end": 247,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 249,
        "end": 267,
        "operator": "-",
        "left": {
          "type": "UpdateExpression",
          "start": 249,
          "end": 255,
          "argument": {
            "type": "Identifier",
            "start": 249,
            "end": 253,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 258,
          "end": 267,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 258,
            "end": 262,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 266,
            "end": 267,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 288,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 269,
        "end": 287,
        "operator": "*",
        "left": {
          "type": "UpdateExpression",
          "start": 269,
          "end": 275,
          "argument": {
            "type": "Identifier",
            "start": 269,
            "end": 273,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 278,
          "end": 287,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 278,
            "end": 282,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 286,
            "end": 287,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 308,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 289,
        "end": 307,
        "operator": "/",
        "left": {
          "type": "UpdateExpression",
          "start": 289,
          "end": 295,
          "argument": {
            "type": "Identifier",
            "start": 289,
            "end": 293,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 298,
          "end": 307,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 298,
            "end": 302,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 306,
            "end": 307,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 328,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 309,
        "end": 327,
        "operator": "%",
        "left": {
          "type": "UpdateExpression",
          "start": 309,
          "end": 315,
          "argument": {
            "type": "Identifier",
            "start": 309,
            "end": 313,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 318,
          "end": 327,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 318,
            "end": 322,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 326,
            "end": 327,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 346,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 330,
        "end": 345,
        "operator": "+",
        "left": {
          "type": "UpdateExpression",
          "start": 330,
          "end": 336,
          "argument": {
            "type": "Identifier",
            "start": 332,
            "end": 336,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 339,
          "end": 345,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 339,
            "end": 340,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 344,
            "end": 345,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 347,
      "end": 363,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 347,
        "end": 362,
        "operator": "-",
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
            "optional": false,
            "typeAnnotation": null
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
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 361,
            "end": 362,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 364,
      "end": 380,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 364,
        "end": 379,
        "operator": "*",
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
            "optional": false,
            "typeAnnotation": null
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
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 378,
            "end": 379,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 397,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 381,
        "end": 396,
        "operator": "/",
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
            "optional": false,
            "typeAnnotation": null
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
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 395,
            "end": 396,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 398,
      "end": 414,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 398,
        "end": 413,
        "operator": "%",
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
            "optional": false,
            "typeAnnotation": null
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
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 412,
            "end": 413,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 416,
      "end": 432,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 416,
        "end": 431,
        "operator": "+",
        "left": {
          "type": "UpdateExpression",
          "start": 416,
          "end": 422,
          "argument": {
            "type": "Identifier",
            "start": 418,
            "end": 422,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 425,
          "end": 431,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 425,
            "end": 426,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 430,
            "end": 431,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 449,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 433,
        "end": 448,
        "operator": "-",
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
            "optional": false,
            "typeAnnotation": null
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
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 447,
            "end": 448,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 466,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 450,
        "end": 465,
        "operator": "*",
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
            "optional": false,
            "typeAnnotation": null
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
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 464,
            "end": 465,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 483,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 467,
        "end": 482,
        "operator": "/",
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
            "optional": false,
            "typeAnnotation": null
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
            "value": 2,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 481,
            "end": 482,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 497,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 485,
        "end": 496,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 485,
          "end": 486,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "UpdateExpression",
          "start": 490,
          "end": 496,
          "argument": {
            "type": "Identifier",
            "start": 492,
            "end": 496,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 498,
      "end": 510,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 498,
        "end": 509,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 498,
          "end": 499,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "UpdateExpression",
          "start": 503,
          "end": 509,
          "argument": {
            "type": "Identifier",
            "start": 505,
            "end": 509,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 511,
      "end": 523,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 511,
        "end": 522,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 511,
          "end": 512,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "UpdateExpression",
          "start": 516,
          "end": 522,
          "argument": {
            "type": "Identifier",
            "start": 516,
            "end": 520,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 524,
      "end": 536,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 524,
        "end": 535,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 524,
          "end": 525,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "UpdateExpression",
          "start": 529,
          "end": 535,
          "argument": {
            "type": "Identifier",
            "start": 529,
            "end": 533,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "--",
          "prefix": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 538,
      "end": 555,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 538,
        "end": 554,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 538,
          "end": 539,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 543,
          "end": 554,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 543,
            "end": 549,
            "argument": {
              "type": "Identifier",
              "start": 545,
              "end": 549,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 553,
            "end": 554,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 556,
      "end": 573,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 556,
        "end": 572,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 556,
          "end": 557,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 561,
          "end": 572,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 561,
            "end": 567,
            "argument": {
              "type": "Identifier",
              "start": 563,
              "end": 567,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 571,
            "end": 572,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 591,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 574,
        "end": 590,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 574,
          "end": 575,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 579,
          "end": 590,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 579,
            "end": 585,
            "argument": {
              "type": "Identifier",
              "start": 579,
              "end": 583,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": false
          },
          "right": {
            "type": "Literal",
            "start": 589,
            "end": 590,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 592,
      "end": 609,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 592,
        "end": 608,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 592,
          "end": 593,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 597,
          "end": 608,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 597,
            "end": 603,
            "argument": {
              "type": "Identifier",
              "start": 597,
              "end": 601,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": false
          },
          "right": {
            "type": "Literal",
            "start": 607,
            "end": 608,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 611,
      "end": 627,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 611,
        "end": 626,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 611,
          "end": 622,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 611,
            "end": 612,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "UpdateExpression",
            "start": 616,
            "end": 622,
            "argument": {
              "type": "Identifier",
              "start": 618,
              "end": 622,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 625,
          "end": 626,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 628,
      "end": 644,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 628,
        "end": 643,
        "operator": "-",
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
            "value": 3,
            "regex": null,
            "bigint": null
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
              "optional": false,
              "typeAnnotation": null
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
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 661,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 645,
        "end": 660,
        "operator": "*",
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
            "value": 3,
            "regex": null,
            "bigint": null
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
              "optional": false,
              "typeAnnotation": null
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
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 662,
      "end": 678,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 662,
        "end": 677,
        "operator": "/",
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
            "value": 3,
            "regex": null,
            "bigint": null
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
              "optional": false,
              "typeAnnotation": null
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
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 679,
      "end": 695,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 679,
        "end": 694,
        "operator": "%",
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
            "value": 3,
            "regex": null,
            "bigint": null
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
              "optional": false,
              "typeAnnotation": null
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
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 697,
      "end": 713,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 697,
        "end": 712,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 697,
          "end": 708,
          "operator": "**",
          "left": {
            "type": "Literal",
            "start": 697,
            "end": 698,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "UpdateExpression",
            "start": 702,
            "end": 708,
            "argument": {
              "type": "Identifier",
              "start": 704,
              "end": 708,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 711,
          "end": 712,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 714,
      "end": 730,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 714,
        "end": 729,
        "operator": "-",
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
            "value": 3,
            "regex": null,
            "bigint": null
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
              "optional": false,
              "typeAnnotation": null
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
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 731,
      "end": 747,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 731,
        "end": 746,
        "operator": "*",
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
            "value": 3,
            "regex": null,
            "bigint": null
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
              "optional": false,
              "typeAnnotation": null
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
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 748,
      "end": 764,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 748,
        "end": 763,
        "operator": "/",
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
            "value": 3,
            "regex": null,
            "bigint": null
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
              "optional": false,
              "typeAnnotation": null
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
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 765,
      "end": 781,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 765,
        "end": 780,
        "operator": "%",
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
            "value": 3,
            "regex": null,
            "bigint": null
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
              "optional": false,
              "typeAnnotation": null
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
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
