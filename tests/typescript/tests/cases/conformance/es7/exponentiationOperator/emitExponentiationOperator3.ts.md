__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 651,
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
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 31,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 30,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 17,
          "end": 24,
          "argument": {
            "type": "UpdateExpression",
            "start": 18,
            "end": 24,
            "argument": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "decorators": [],
              "name": "temp",
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
          "type": "Literal",
          "start": 29,
          "end": 30,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 47,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 32,
        "end": 46,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 33,
          "end": 40,
          "argument": {
            "type": "UpdateExpression",
            "start": 34,
            "end": 40,
            "argument": {
              "type": "Identifier",
              "start": 36,
              "end": 40,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": true
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 45,
          "end": 46,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 48,
        "end": 62,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 49,
          "end": 56,
          "argument": {
            "type": "UpdateExpression",
            "start": 50,
            "end": 56,
            "argument": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "decorators": [],
              "name": "temp",
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
          "type": "Literal",
          "start": 61,
          "end": 62,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 64,
        "end": 78,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 65,
          "end": 72,
          "argument": {
            "type": "UpdateExpression",
            "start": 66,
            "end": 72,
            "argument": {
              "type": "Identifier",
              "start": 66,
              "end": 70,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": false
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 77,
          "end": 78,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 102,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 80,
        "end": 101,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 81,
          "end": 95,
          "argument": {
            "type": "BinaryExpression",
            "start": 83,
            "end": 94,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 83,
              "end": 84,
              "raw": "1",
              "value": 1
            },
            "right": {
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
              "operator": "++",
              "prefix": true
            }
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 100,
          "end": 101,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 103,
        "end": 124,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 104,
          "end": 118,
          "argument": {
            "type": "BinaryExpression",
            "start": 106,
            "end": 117,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 106,
              "end": 107,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UpdateExpression",
              "start": 111,
              "end": 117,
              "argument": {
                "type": "Identifier",
                "start": 113,
                "end": 117,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "--",
              "prefix": true
            }
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 123,
          "end": 124,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 126,
        "end": 147,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 127,
          "end": 141,
          "argument": {
            "type": "BinaryExpression",
            "start": 129,
            "end": 140,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 129,
              "end": 130,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UpdateExpression",
              "start": 134,
              "end": 140,
              "argument": {
                "type": "Identifier",
                "start": 134,
                "end": 138,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 146,
          "end": 147,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 171,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 149,
        "end": 170,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 150,
          "end": 164,
          "argument": {
            "type": "BinaryExpression",
            "start": 152,
            "end": 163,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 152,
              "end": 153,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UpdateExpression",
              "start": 157,
              "end": 163,
              "argument": {
                "type": "Identifier",
                "start": 157,
                "end": 161,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "--",
              "prefix": false
            }
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 169,
          "end": 170,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 188,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 173,
        "end": 187,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 174,
          "end": 176,
          "argument": {
            "type": "Literal",
            "start": 175,
            "end": 176,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
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
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 204,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 189,
        "end": 203,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 190,
          "end": 192,
          "argument": {
            "type": "Literal",
            "start": 191,
            "end": 192,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 197,
          "end": 203,
          "argument": {
            "type": "Identifier",
            "start": 197,
            "end": 201,
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
      "start": 205,
      "end": 220,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 205,
        "end": 219,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 206,
          "end": 208,
          "argument": {
            "type": "Literal",
            "start": 207,
            "end": 208,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 213,
          "end": 219,
          "argument": {
            "type": "Identifier",
            "start": 215,
            "end": 219,
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
      "start": 221,
      "end": 236,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 221,
        "end": 235,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 222,
          "end": 224,
          "argument": {
            "type": "Literal",
            "start": 223,
            "end": 224,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 229,
          "end": 235,
          "argument": {
            "type": "Identifier",
            "start": 231,
            "end": 235,
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
      "start": 237,
      "end": 252,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 237,
        "end": 251,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 238,
          "end": 240,
          "argument": {
            "type": "Literal",
            "start": 239,
            "end": 240,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 245,
          "end": 251,
          "argument": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
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
      "start": 253,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 253,
        "end": 267,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 254,
          "end": 256,
          "argument": {
            "type": "Literal",
            "start": 255,
            "end": 256,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 261,
          "end": 267,
          "argument": {
            "type": "Identifier",
            "start": 261,
            "end": 265,
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
      "start": 269,
      "end": 284,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 269,
        "end": 283,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 270,
          "end": 272,
          "argument": {
            "type": "Literal",
            "start": 271,
            "end": 272,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 277,
          "end": 283,
          "argument": {
            "type": "Identifier",
            "start": 279,
            "end": 283,
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
      "start": 285,
      "end": 300,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 285,
        "end": 299,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 286,
          "end": 288,
          "argument": {
            "type": "Literal",
            "start": 287,
            "end": 288,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 293,
          "end": 299,
          "argument": {
            "type": "Identifier",
            "start": 295,
            "end": 299,
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
      "start": 301,
      "end": 321,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 301,
        "end": 320,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 302,
          "end": 304,
          "argument": {
            "type": "Literal",
            "start": 303,
            "end": 304,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 309,
          "end": 320,
          "operator": "**",
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
            "operator": "++",
            "prefix": false
          },
          "right": {
            "type": "Literal",
            "start": 319,
            "end": 320,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 342,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 322,
        "end": 341,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 323,
          "end": 325,
          "argument": {
            "type": "Literal",
            "start": 324,
            "end": 325,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 330,
          "end": 341,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 330,
            "end": 336,
            "argument": {
              "type": "Identifier",
              "start": 330,
              "end": 334,
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
            "start": 340,
            "end": 341,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 363,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 343,
        "end": 362,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 344,
          "end": 346,
          "argument": {
            "type": "Literal",
            "start": 345,
            "end": 346,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 351,
          "end": 362,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 351,
            "end": 357,
            "argument": {
              "type": "Identifier",
              "start": 353,
              "end": 357,
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
            "start": 361,
            "end": 362,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 364,
      "end": 384,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 364,
        "end": 383,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 365,
          "end": 367,
          "argument": {
            "type": "Literal",
            "start": 366,
            "end": 367,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 372,
          "end": 383,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 372,
            "end": 378,
            "argument": {
              "type": "Identifier",
              "start": 374,
              "end": 378,
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
            "start": 382,
            "end": 383,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 405,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 385,
        "end": 404,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 386,
          "end": 388,
          "argument": {
            "type": "Literal",
            "start": 387,
            "end": 388,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 393,
          "end": 404,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 393,
            "end": 399,
            "argument": {
              "type": "Identifier",
              "start": 393,
              "end": 397,
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
            "start": 403,
            "end": 404,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 406,
      "end": 426,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 406,
        "end": 425,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 407,
          "end": 409,
          "argument": {
            "type": "Literal",
            "start": 408,
            "end": 409,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 414,
          "end": 425,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 414,
            "end": 420,
            "argument": {
              "type": "Identifier",
              "start": 414,
              "end": 418,
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
            "start": 424,
            "end": 425,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 447,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 427,
        "end": 446,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 428,
          "end": 430,
          "argument": {
            "type": "Literal",
            "start": 429,
            "end": 430,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 435,
          "end": 446,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 435,
            "end": 441,
            "argument": {
              "type": "Identifier",
              "start": 437,
              "end": 441,
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
            "start": 445,
            "end": 446,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 468,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 448,
        "end": 467,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 449,
          "end": 451,
          "argument": {
            "type": "Literal",
            "start": 450,
            "end": 451,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 456,
          "end": 467,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 456,
            "end": 462,
            "argument": {
              "type": "Identifier",
              "start": 458,
              "end": 462,
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
            "start": 466,
            "end": 467,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 470,
      "end": 483,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 470,
        "end": 482,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 470,
          "end": 471,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UnaryExpression",
          "start": 475,
          "end": 482,
          "argument": {
            "type": "UpdateExpression",
            "start": 476,
            "end": 482,
            "argument": {
              "type": "Identifier",
              "start": 476,
              "end": 480,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": false
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 484,
      "end": 497,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 484,
        "end": 496,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 484,
          "end": 485,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UnaryExpression",
          "start": 489,
          "end": 496,
          "argument": {
            "type": "UpdateExpression",
            "start": 490,
            "end": 496,
            "argument": {
              "type": "Identifier",
              "start": 490,
              "end": 494,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": false
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 498,
      "end": 511,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 498,
        "end": 510,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 498,
          "end": 499,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UnaryExpression",
          "start": 503,
          "end": 510,
          "argument": {
            "type": "UpdateExpression",
            "start": 504,
            "end": 510,
            "argument": {
              "type": "Identifier",
              "start": 506,
              "end": 510,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 525,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 512,
        "end": 524,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 512,
          "end": 513,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UnaryExpression",
          "start": 517,
          "end": 524,
          "argument": {
            "type": "UpdateExpression",
            "start": 518,
            "end": 524,
            "argument": {
              "type": "Identifier",
              "start": 520,
              "end": 524,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": true
          },
          "operator": "+",
          "prefix": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 526,
      "end": 546,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 526,
        "end": 545,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 526,
          "end": 527,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 531,
          "end": 545,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 532,
            "end": 539,
            "argument": {
              "type": "UpdateExpression",
              "start": 533,
              "end": 539,
              "argument": {
                "type": "Identifier",
                "start": 533,
                "end": 537,
                "decorators": [],
                "name": "temp",
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
            "type": "Literal",
            "start": 544,
            "end": 545,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 547,
      "end": 567,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 547,
        "end": 566,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 547,
          "end": 548,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 552,
          "end": 566,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 553,
            "end": 560,
            "argument": {
              "type": "UpdateExpression",
              "start": 554,
              "end": 560,
              "argument": {
                "type": "Identifier",
                "start": 554,
                "end": 558,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "--",
              "prefix": false
            },
            "operator": "-",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 565,
            "end": 566,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 568,
      "end": 588,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 568,
        "end": 587,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 568,
          "end": 569,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 573,
          "end": 587,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 574,
            "end": 581,
            "argument": {
              "type": "UpdateExpression",
              "start": 575,
              "end": 581,
              "argument": {
                "type": "Identifier",
                "start": 575,
                "end": 579,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            },
            "operator": "+",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 586,
            "end": 587,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 589,
      "end": 609,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 589,
        "end": 608,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 589,
          "end": 590,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 594,
          "end": 608,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 595,
            "end": 602,
            "argument": {
              "type": "UpdateExpression",
              "start": 596,
              "end": 602,
              "argument": {
                "type": "Identifier",
                "start": 596,
                "end": 600,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "--",
              "prefix": false
            },
            "operator": "+",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 607,
            "end": 608,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 610,
      "end": 630,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 610,
        "end": 629,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 610,
          "end": 611,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 615,
          "end": 629,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 616,
            "end": 623,
            "argument": {
              "type": "UpdateExpression",
              "start": 617,
              "end": 623,
              "argument": {
                "type": "Identifier",
                "start": 619,
                "end": 623,
                "decorators": [],
                "name": "temp",
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
            "type": "Literal",
            "start": 628,
            "end": 629,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 631,
      "end": 651,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 631,
        "end": 650,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 631,
          "end": 632,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 636,
          "end": 650,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 637,
            "end": 644,
            "argument": {
              "type": "UpdateExpression",
              "start": 638,
              "end": 644,
              "argument": {
                "type": "Identifier",
                "start": 640,
                "end": 644,
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "--",
              "prefix": true
            },
            "operator": "+",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 649,
            "end": 650,
            "raw": "2",
            "value": 2
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
