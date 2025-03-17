__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 669,
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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 25,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 28,
            "end": 30,
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
      "type": "ExpressionStatement",
      "start": 33,
      "end": 48,
      "expression": {
        "type": "BinaryExpression",
        "start": 33,
        "end": 47,
        "left": {
          "type": "UnaryExpression",
          "start": 34,
          "end": 41,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "UpdateExpression",
            "start": 35,
            "end": 41,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 46,
          "end": 47,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 64,
      "expression": {
        "type": "BinaryExpression",
        "start": 49,
        "end": 63,
        "left": {
          "type": "UnaryExpression",
          "start": 50,
          "end": 57,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "UpdateExpression",
            "start": 51,
            "end": 57,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 62,
          "end": 63,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 80,
      "expression": {
        "type": "BinaryExpression",
        "start": 65,
        "end": 79,
        "left": {
          "type": "UnaryExpression",
          "start": 66,
          "end": 73,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "UpdateExpression",
            "start": 67,
            "end": 73,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 67,
              "end": 71,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 78,
          "end": 79,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 96,
      "expression": {
        "type": "BinaryExpression",
        "start": 81,
        "end": 95,
        "left": {
          "type": "UnaryExpression",
          "start": 82,
          "end": 89,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "UpdateExpression",
            "start": 83,
            "end": 89,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 94,
          "end": 95,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 119,
      "expression": {
        "type": "BinaryExpression",
        "start": 97,
        "end": 118,
        "left": {
          "type": "UnaryExpression",
          "start": 98,
          "end": 112,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 100,
            "end": 111,
            "left": {
              "type": "Literal",
              "start": 100,
              "end": 101,
              "value": 1,
              "raw": "1"
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "start": 105,
              "end": 111,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 117,
          "end": 118,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 142,
      "expression": {
        "type": "BinaryExpression",
        "start": 120,
        "end": 141,
        "left": {
          "type": "UnaryExpression",
          "start": 121,
          "end": 135,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 123,
            "end": 134,
            "left": {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "value": 1,
              "raw": "1"
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "start": 128,
              "end": 134,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 130,
                "end": 134,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 140,
          "end": 141,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 165,
      "expression": {
        "type": "BinaryExpression",
        "start": 143,
        "end": 164,
        "left": {
          "type": "UnaryExpression",
          "start": 144,
          "end": 158,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 146,
            "end": 157,
            "left": {
              "type": "Literal",
              "start": 146,
              "end": 147,
              "value": 1,
              "raw": "1"
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "start": 151,
              "end": 157,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 151,
                "end": 155,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 163,
          "end": 164,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 188,
      "expression": {
        "type": "BinaryExpression",
        "start": 166,
        "end": 187,
        "left": {
          "type": "UnaryExpression",
          "start": 167,
          "end": 181,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 169,
            "end": 180,
            "left": {
              "type": "Literal",
              "start": 169,
              "end": 170,
              "value": 1,
              "raw": "1"
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "start": 174,
              "end": 180,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 174,
                "end": 178,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "start": 186,
          "end": 187,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 205,
      "expression": {
        "type": "BinaryExpression",
        "start": 190,
        "end": 204,
        "left": {
          "type": "UnaryExpression",
          "start": 191,
          "end": 193,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 192,
            "end": 193,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "start": 198,
          "end": 204,
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "start": 198,
            "end": 202,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 221,
      "expression": {
        "type": "BinaryExpression",
        "start": 206,
        "end": 220,
        "left": {
          "type": "UnaryExpression",
          "start": 207,
          "end": 209,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 208,
            "end": 209,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "start": 214,
          "end": 220,
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "start": 214,
            "end": 218,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 237,
      "expression": {
        "type": "BinaryExpression",
        "start": 222,
        "end": 236,
        "left": {
          "type": "UnaryExpression",
          "start": 223,
          "end": 225,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 224,
            "end": 225,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "start": 230,
          "end": 236,
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 232,
            "end": 236,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 253,
      "expression": {
        "type": "BinaryExpression",
        "start": 238,
        "end": 252,
        "left": {
          "type": "UnaryExpression",
          "start": 239,
          "end": 241,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 240,
            "end": 241,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "start": 246,
          "end": 252,
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 248,
            "end": 252,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 269,
      "expression": {
        "type": "BinaryExpression",
        "start": 254,
        "end": 268,
        "left": {
          "type": "UnaryExpression",
          "start": 255,
          "end": 257,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 256,
            "end": 257,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "start": 262,
          "end": 268,
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "start": 262,
            "end": 266,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 285,
      "expression": {
        "type": "BinaryExpression",
        "start": 270,
        "end": 284,
        "left": {
          "type": "UnaryExpression",
          "start": 271,
          "end": 273,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "start": 278,
          "end": 284,
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "start": 278,
            "end": 282,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 301,
      "expression": {
        "type": "BinaryExpression",
        "start": 286,
        "end": 300,
        "left": {
          "type": "UnaryExpression",
          "start": 287,
          "end": 289,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 288,
            "end": 289,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "start": 294,
          "end": 300,
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 296,
            "end": 300,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 317,
      "expression": {
        "type": "BinaryExpression",
        "start": 302,
        "end": 316,
        "left": {
          "type": "UnaryExpression",
          "start": 303,
          "end": 305,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 304,
            "end": 305,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "start": 310,
          "end": 316,
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 312,
            "end": 316,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 318,
      "end": 338,
      "expression": {
        "type": "BinaryExpression",
        "start": 318,
        "end": 337,
        "left": {
          "type": "UnaryExpression",
          "start": 319,
          "end": 321,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 320,
            "end": 321,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 326,
          "end": 337,
          "left": {
            "type": "UpdateExpression",
            "start": 326,
            "end": 332,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 326,
              "end": 330,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 336,
            "end": 337,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 359,
      "expression": {
        "type": "BinaryExpression",
        "start": 339,
        "end": 358,
        "left": {
          "type": "UnaryExpression",
          "start": 340,
          "end": 342,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 341,
            "end": 342,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 347,
          "end": 358,
          "left": {
            "type": "UpdateExpression",
            "start": 347,
            "end": 353,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 347,
              "end": 351,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 357,
            "end": 358,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 360,
      "end": 380,
      "expression": {
        "type": "BinaryExpression",
        "start": 360,
        "end": 379,
        "left": {
          "type": "UnaryExpression",
          "start": 361,
          "end": 363,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 362,
            "end": 363,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 368,
          "end": 379,
          "left": {
            "type": "UpdateExpression",
            "start": 368,
            "end": 374,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 370,
              "end": 374,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 378,
            "end": 379,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 401,
      "expression": {
        "type": "BinaryExpression",
        "start": 381,
        "end": 400,
        "left": {
          "type": "UnaryExpression",
          "start": 382,
          "end": 384,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 383,
            "end": 384,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 389,
          "end": 400,
          "left": {
            "type": "UpdateExpression",
            "start": 389,
            "end": 395,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 391,
              "end": 395,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 399,
            "end": 400,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 422,
      "expression": {
        "type": "BinaryExpression",
        "start": 402,
        "end": 421,
        "left": {
          "type": "UnaryExpression",
          "start": 403,
          "end": 405,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 404,
            "end": 405,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 410,
          "end": 421,
          "left": {
            "type": "UpdateExpression",
            "start": 410,
            "end": 416,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 410,
              "end": 414,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 420,
            "end": 421,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 443,
      "expression": {
        "type": "BinaryExpression",
        "start": 423,
        "end": 442,
        "left": {
          "type": "UnaryExpression",
          "start": 424,
          "end": 426,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 425,
            "end": 426,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 431,
          "end": 442,
          "left": {
            "type": "UpdateExpression",
            "start": 431,
            "end": 437,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 431,
              "end": 435,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 441,
            "end": 442,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 464,
      "expression": {
        "type": "BinaryExpression",
        "start": 444,
        "end": 463,
        "left": {
          "type": "UnaryExpression",
          "start": 445,
          "end": 447,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 446,
            "end": 447,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 452,
          "end": 463,
          "left": {
            "type": "UpdateExpression",
            "start": 452,
            "end": 458,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 454,
              "end": 458,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 462,
            "end": 463,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 485,
      "expression": {
        "type": "BinaryExpression",
        "start": 465,
        "end": 484,
        "left": {
          "type": "UnaryExpression",
          "start": 466,
          "end": 468,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 467,
            "end": 468,
            "value": 3,
            "raw": "3"
          }
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 473,
          "end": 484,
          "left": {
            "type": "UpdateExpression",
            "start": 473,
            "end": 479,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 475,
              "end": 479,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 483,
            "end": 484,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 500,
      "expression": {
        "type": "BinaryExpression",
        "start": 487,
        "end": 499,
        "left": {
          "type": "Literal",
          "start": 487,
          "end": 488,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "start": 492,
          "end": 499,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "UpdateExpression",
            "start": 493,
            "end": 499,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 493,
              "end": 497,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 501,
      "end": 514,
      "expression": {
        "type": "BinaryExpression",
        "start": 501,
        "end": 513,
        "left": {
          "type": "Literal",
          "start": 501,
          "end": 502,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "start": 506,
          "end": 513,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "UpdateExpression",
            "start": 507,
            "end": 513,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 507,
              "end": 511,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 515,
      "end": 528,
      "expression": {
        "type": "BinaryExpression",
        "start": 515,
        "end": 527,
        "left": {
          "type": "Literal",
          "start": 515,
          "end": 516,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "start": 520,
          "end": 527,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "UpdateExpression",
            "start": 521,
            "end": 527,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 523,
              "end": 527,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 529,
      "end": 542,
      "expression": {
        "type": "BinaryExpression",
        "start": 529,
        "end": 541,
        "left": {
          "type": "Literal",
          "start": 529,
          "end": 530,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "start": 534,
          "end": 541,
          "operator": "+",
          "prefix": true,
          "argument": {
            "type": "UpdateExpression",
            "start": 535,
            "end": 541,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 537,
              "end": 541,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 563,
      "expression": {
        "type": "BinaryExpression",
        "start": 543,
        "end": 562,
        "left": {
          "type": "Literal",
          "start": 543,
          "end": 544,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 548,
          "end": 562,
          "left": {
            "type": "UnaryExpression",
            "start": 549,
            "end": 556,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "UpdateExpression",
              "start": 550,
              "end": 556,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 550,
                "end": 554,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 561,
            "end": 562,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 564,
      "end": 584,
      "expression": {
        "type": "BinaryExpression",
        "start": 564,
        "end": 583,
        "left": {
          "type": "Literal",
          "start": 564,
          "end": 565,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 569,
          "end": 583,
          "left": {
            "type": "UnaryExpression",
            "start": 570,
            "end": 577,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "UpdateExpression",
              "start": 571,
              "end": 577,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 571,
                "end": 575,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 582,
            "end": 583,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 585,
      "end": 605,
      "expression": {
        "type": "BinaryExpression",
        "start": 585,
        "end": 604,
        "left": {
          "type": "Literal",
          "start": 585,
          "end": 586,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 590,
          "end": 604,
          "left": {
            "type": "UnaryExpression",
            "start": 591,
            "end": 598,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "UpdateExpression",
              "start": 592,
              "end": 598,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 592,
                "end": 596,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 603,
            "end": 604,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 606,
      "end": 626,
      "expression": {
        "type": "BinaryExpression",
        "start": 606,
        "end": 625,
        "left": {
          "type": "Literal",
          "start": 606,
          "end": 607,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 611,
          "end": 625,
          "left": {
            "type": "UnaryExpression",
            "start": 612,
            "end": 619,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "UpdateExpression",
              "start": 613,
              "end": 619,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 613,
                "end": 617,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 624,
            "end": 625,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 627,
      "end": 647,
      "expression": {
        "type": "BinaryExpression",
        "start": 627,
        "end": 646,
        "left": {
          "type": "Literal",
          "start": 627,
          "end": 628,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 632,
          "end": 646,
          "left": {
            "type": "UnaryExpression",
            "start": 633,
            "end": 640,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "UpdateExpression",
              "start": 634,
              "end": 640,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 636,
                "end": 640,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 645,
            "end": 646,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 648,
      "end": 668,
      "expression": {
        "type": "BinaryExpression",
        "start": 648,
        "end": 667,
        "left": {
          "type": "Literal",
          "start": 648,
          "end": 649,
          "value": 3,
          "raw": "3"
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "start": 653,
          "end": 667,
          "left": {
            "type": "UnaryExpression",
            "start": 654,
            "end": 661,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "UpdateExpression",
              "start": 655,
              "end": 661,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 657,
                "end": 661,
                "name": "temp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 666,
            "end": 667,
            "value": 2,
            "raw": "2"
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
