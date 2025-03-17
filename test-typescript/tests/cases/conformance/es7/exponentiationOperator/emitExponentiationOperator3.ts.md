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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 25,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
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
      "end": 48,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 33,
        "end": 47,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 34,
          "end": 41,
          "argument": {
            "type": "UpdateExpression",
            "start": 35,
            "end": 41,
            "argument": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
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
          "start": 46,
          "end": 47,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 64,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 49,
        "end": 63,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 50,
          "end": 57,
          "argument": {
            "type": "UpdateExpression",
            "start": 51,
            "end": 57,
            "argument": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
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
          "start": 62,
          "end": 63,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 65,
        "end": 79,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 66,
          "end": 73,
          "argument": {
            "type": "UpdateExpression",
            "start": 67,
            "end": 73,
            "argument": {
              "type": "Identifier",
              "start": 67,
              "end": 71,
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
          "start": 78,
          "end": 79,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 96,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 81,
        "end": 95,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 82,
          "end": 89,
          "argument": {
            "type": "UpdateExpression",
            "start": 83,
            "end": 89,
            "argument": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
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
          "start": 94,
          "end": 95,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 97,
        "end": 118,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 98,
          "end": 112,
          "argument": {
            "type": "BinaryExpression",
            "start": 100,
            "end": 111,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 100,
              "end": 101,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UpdateExpression",
              "start": 105,
              "end": 111,
              "argument": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
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
          "start": 117,
          "end": 118,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 142,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 120,
        "end": 141,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 121,
          "end": 135,
          "argument": {
            "type": "BinaryExpression",
            "start": 123,
            "end": 134,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "raw": "1",
              "value": 1
            },
            "right": {
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
            }
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 140,
          "end": 141,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 165,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 143,
        "end": 164,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 144,
          "end": 158,
          "argument": {
            "type": "BinaryExpression",
            "start": 146,
            "end": 157,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 146,
              "end": 147,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UpdateExpression",
              "start": 151,
              "end": 157,
              "argument": {
                "type": "Identifier",
                "start": 151,
                "end": 155,
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
          "start": 163,
          "end": 164,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 188,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 166,
        "end": 187,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 167,
          "end": 181,
          "argument": {
            "type": "BinaryExpression",
            "start": 169,
            "end": 180,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 169,
              "end": 170,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "UpdateExpression",
              "start": 174,
              "end": 180,
              "argument": {
                "type": "Identifier",
                "start": 174,
                "end": 178,
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
          "start": 186,
          "end": 187,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 205,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 190,
        "end": 204,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 191,
          "end": 193,
          "argument": {
            "type": "Literal",
            "start": 192,
            "end": 193,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 198,
          "end": 204,
          "argument": {
            "type": "Identifier",
            "start": 198,
            "end": 202,
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
      "start": 206,
      "end": 221,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 206,
        "end": 220,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 207,
          "end": 209,
          "argument": {
            "type": "Literal",
            "start": 208,
            "end": 209,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 214,
          "end": 220,
          "argument": {
            "type": "Identifier",
            "start": 214,
            "end": 218,
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
      "start": 222,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 222,
        "end": 236,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 223,
          "end": 225,
          "argument": {
            "type": "Literal",
            "start": 224,
            "end": 225,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 230,
          "end": 236,
          "argument": {
            "type": "Identifier",
            "start": 232,
            "end": 236,
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
      "start": 238,
      "end": 253,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 238,
        "end": 252,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 239,
          "end": 241,
          "argument": {
            "type": "Literal",
            "start": 240,
            "end": 241,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 246,
          "end": 252,
          "argument": {
            "type": "Identifier",
            "start": 248,
            "end": 252,
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
      "start": 254,
      "end": 269,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 254,
        "end": 268,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 255,
          "end": 257,
          "argument": {
            "type": "Literal",
            "start": 256,
            "end": 257,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 262,
          "end": 268,
          "argument": {
            "type": "Identifier",
            "start": 262,
            "end": 266,
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
      "start": 270,
      "end": 285,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 270,
        "end": 284,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 271,
          "end": 273,
          "argument": {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 278,
          "end": 284,
          "argument": {
            "type": "Identifier",
            "start": 278,
            "end": 282,
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
      "start": 286,
      "end": 301,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 286,
        "end": 300,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 287,
          "end": 289,
          "argument": {
            "type": "Literal",
            "start": 288,
            "end": 289,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 294,
          "end": 300,
          "argument": {
            "type": "Identifier",
            "start": 296,
            "end": 300,
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
      "start": 302,
      "end": 317,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 302,
        "end": 316,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 303,
          "end": 305,
          "argument": {
            "type": "Literal",
            "start": 304,
            "end": 305,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "UpdateExpression",
          "start": 310,
          "end": 316,
          "argument": {
            "type": "Identifier",
            "start": 312,
            "end": 316,
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
      "start": 318,
      "end": 338,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 318,
        "end": 337,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 319,
          "end": 321,
          "argument": {
            "type": "Literal",
            "start": 320,
            "end": 321,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 326,
          "end": 337,
          "operator": "**",
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
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": false
          },
          "right": {
            "type": "Literal",
            "start": 336,
            "end": 337,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 359,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 339,
        "end": 358,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 340,
          "end": 342,
          "argument": {
            "type": "Literal",
            "start": 341,
            "end": 342,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 347,
          "end": 358,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 347,
            "end": 353,
            "argument": {
              "type": "Identifier",
              "start": 347,
              "end": 351,
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
            "start": 357,
            "end": 358,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 360,
      "end": 380,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 360,
        "end": 379,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 361,
          "end": 363,
          "argument": {
            "type": "Literal",
            "start": 362,
            "end": 363,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 368,
          "end": 379,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 368,
            "end": 374,
            "argument": {
              "type": "Identifier",
              "start": 370,
              "end": 374,
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
            "start": 378,
            "end": 379,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 401,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 381,
        "end": 400,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 382,
          "end": 384,
          "argument": {
            "type": "Literal",
            "start": 383,
            "end": 384,
            "raw": "3",
            "value": 3
          },
          "operator": "-",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 389,
          "end": 400,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 389,
            "end": 395,
            "argument": {
              "type": "Identifier",
              "start": 391,
              "end": 395,
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
            "start": 399,
            "end": 400,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 422,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 402,
        "end": 421,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 403,
          "end": 405,
          "argument": {
            "type": "Literal",
            "start": 404,
            "end": 405,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 410,
          "end": 421,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 410,
            "end": 416,
            "argument": {
              "type": "Identifier",
              "start": 410,
              "end": 414,
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
            "start": 420,
            "end": 421,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 443,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 423,
        "end": 442,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 424,
          "end": 426,
          "argument": {
            "type": "Literal",
            "start": 425,
            "end": 426,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 431,
          "end": 442,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 431,
            "end": 437,
            "argument": {
              "type": "Identifier",
              "start": 431,
              "end": 435,
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
            "start": 441,
            "end": 442,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 464,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 444,
        "end": 463,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 445,
          "end": 447,
          "argument": {
            "type": "Literal",
            "start": 446,
            "end": 447,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 452,
          "end": 463,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 452,
            "end": 458,
            "argument": {
              "type": "Identifier",
              "start": 454,
              "end": 458,
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
            "start": 462,
            "end": 463,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 485,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 465,
        "end": 484,
        "operator": "**",
        "left": {
          "type": "UnaryExpression",
          "start": 466,
          "end": 468,
          "argument": {
            "type": "Literal",
            "start": 467,
            "end": 468,
            "raw": "3",
            "value": 3
          },
          "operator": "+",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 473,
          "end": 484,
          "operator": "**",
          "left": {
            "type": "UpdateExpression",
            "start": 473,
            "end": 479,
            "argument": {
              "type": "Identifier",
              "start": 475,
              "end": 479,
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
            "start": 483,
            "end": 484,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 500,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 487,
        "end": 499,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 487,
          "end": 488,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UnaryExpression",
          "start": 492,
          "end": 499,
          "argument": {
            "type": "UpdateExpression",
            "start": 493,
            "end": 499,
            "argument": {
              "type": "Identifier",
              "start": 493,
              "end": 497,
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
      "start": 501,
      "end": 514,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 501,
        "end": 513,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 501,
          "end": 502,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UnaryExpression",
          "start": 506,
          "end": 513,
          "argument": {
            "type": "UpdateExpression",
            "start": 507,
            "end": 513,
            "argument": {
              "type": "Identifier",
              "start": 507,
              "end": 511,
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
      "start": 515,
      "end": 528,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 515,
        "end": 527,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 515,
          "end": 516,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UnaryExpression",
          "start": 520,
          "end": 527,
          "argument": {
            "type": "UpdateExpression",
            "start": 521,
            "end": 527,
            "argument": {
              "type": "Identifier",
              "start": 523,
              "end": 527,
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
      "start": 529,
      "end": 542,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 529,
        "end": 541,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 529,
          "end": 530,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "UnaryExpression",
          "start": 534,
          "end": 541,
          "argument": {
            "type": "UpdateExpression",
            "start": 535,
            "end": 541,
            "argument": {
              "type": "Identifier",
              "start": 537,
              "end": 541,
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
      "start": 543,
      "end": 563,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 543,
        "end": 562,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 543,
          "end": 544,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 548,
          "end": 562,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 549,
            "end": 556,
            "argument": {
              "type": "UpdateExpression",
              "start": 550,
              "end": 556,
              "argument": {
                "type": "Identifier",
                "start": 550,
                "end": 554,
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
            "start": 561,
            "end": 562,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 564,
      "end": 584,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 564,
        "end": 583,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 564,
          "end": 565,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 569,
          "end": 583,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 570,
            "end": 577,
            "argument": {
              "type": "UpdateExpression",
              "start": 571,
              "end": 577,
              "argument": {
                "type": "Identifier",
                "start": 571,
                "end": 575,
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
            "start": 582,
            "end": 583,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 585,
      "end": 605,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 585,
        "end": 604,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 585,
          "end": 586,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 590,
          "end": 604,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 591,
            "end": 598,
            "argument": {
              "type": "UpdateExpression",
              "start": 592,
              "end": 598,
              "argument": {
                "type": "Identifier",
                "start": 592,
                "end": 596,
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
            "start": 603,
            "end": 604,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 606,
      "end": 626,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 606,
        "end": 625,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 606,
          "end": 607,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 611,
          "end": 625,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 612,
            "end": 619,
            "argument": {
              "type": "UpdateExpression",
              "start": 613,
              "end": 619,
              "argument": {
                "type": "Identifier",
                "start": 613,
                "end": 617,
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
      "start": 627,
      "end": 647,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 627,
        "end": 646,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 627,
          "end": 628,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 632,
          "end": 646,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 633,
            "end": 640,
            "argument": {
              "type": "UpdateExpression",
              "start": 634,
              "end": 640,
              "argument": {
                "type": "Identifier",
                "start": 636,
                "end": 640,
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
            "start": 645,
            "end": 646,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 648,
      "end": 668,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 648,
        "end": 667,
        "operator": "**",
        "left": {
          "type": "Literal",
          "start": 648,
          "end": 649,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "BinaryExpression",
          "start": 653,
          "end": 667,
          "operator": "**",
          "left": {
            "type": "UnaryExpression",
            "start": 654,
            "end": 661,
            "argument": {
              "type": "UpdateExpression",
              "start": 655,
              "end": 661,
              "argument": {
                "type": "Identifier",
                "start": 657,
                "end": 661,
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
            "start": 666,
            "end": 667,
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
