__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 739,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 14,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 9,
                "end": 14,
                "literal": {
                  "type": "Literal",
                  "start": 9,
                  "end": 14,
                  "raw": "\"ABC\"",
                  "value": "ABC",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 22,
            "raw": "\"ABC\"",
            "value": "ABC",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 38,
            "decorators": [],
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 38,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 33,
                "end": 38,
                "literal": {
                  "type": "Literal",
                  "start": 33,
                  "end": 38,
                  "raw": "\"XYZ\"",
                  "value": "XYZ",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 41,
            "end": 46,
            "raw": "\"XYZ\"",
            "value": "XYZ",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 75,
            "decorators": [],
            "name": "abcOrXyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 75,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 62,
                "end": 75,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 62,
                    "end": 67,
                    "literal": {
                      "type": "Literal",
                      "start": 62,
                      "end": 67,
                      "raw": "\"ABC\"",
                      "value": "ABC",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 70,
                    "end": 75,
                    "literal": {
                      "type": "Literal",
                      "start": 70,
                      "end": 75,
                      "raw": "\"XYZ\"",
                      "value": "XYZ",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 78,
            "end": 88,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 134,
            "decorators": [],
            "name": "abcOrXyzOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 134,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 112,
                "end": 134,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 112,
                    "end": 117,
                    "literal": {
                      "type": "Literal",
                      "start": 112,
                      "end": 117,
                      "raw": "\"ABC\"",
                      "value": "ABC",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 120,
                    "end": 125,
                    "literal": {
                      "type": "Literal",
                      "start": 120,
                      "end": 125,
                      "raw": "\"XYZ\"",
                      "value": "XYZ",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 128,
                    "end": 134
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 137,
            "end": 152,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 137,
              "end": 145,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 149,
              "end": 152,
              "raw": "100",
              "value": 100,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 163,
            "end": 171,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 163,
              "end": 165,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 181,
            "end": 189,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 187,
              "end": 189,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 199,
            "end": 207,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 199,
              "end": 201,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "Identifier",
              "start": 204,
              "end": 207,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 217,
            "end": 225,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 223,
              "end": 225,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 235,
            "end": 244,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 241,
              "end": 244,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 254,
            "end": 263,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 260,
              "end": 263,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 270,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 273,
            "end": 283,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 273,
              "end": 277,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "Identifier",
              "start": 280,
              "end": 283,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 293,
            "end": 303,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 293,
              "end": 296,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 299,
              "end": 303,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 313,
            "end": 333,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 313,
              "end": 327,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 313,
                "end": 316,
                "decorators": [],
                "name": "abc",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 319,
                "end": 327,
                "decorators": [],
                "name": "abcOrXyz",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 330,
              "end": 333,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 362,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 340,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 343,
            "end": 362,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 343,
              "end": 351,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 362,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 369,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 372,
            "end": 381,
            "argument": {
              "type": "Identifier",
              "start": 373,
              "end": 381,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 400,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 388,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 391,
            "end": 400,
            "argument": {
              "type": "Identifier",
              "start": 392,
              "end": 400,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 431,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 410,
            "end": 431,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 410,
              "end": 426,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 429,
              "end": 431,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 438,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 441,
            "end": 462,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 441,
              "end": 443,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "Identifier",
              "start": 446,
              "end": 462,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 499,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 469,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 472,
            "end": 499,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 472,
              "end": 488,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 491,
              "end": 499,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 537,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 536,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 506,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 509,
            "end": 536,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 509,
              "end": 517,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 520,
              "end": 536,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 538,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 563,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 543,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 546,
            "end": 563,
            "argument": {
              "type": "Identifier",
              "start": 547,
              "end": 563,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 590,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 570,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 573,
            "end": 590,
            "argument": {
              "type": "Identifier",
              "start": 574,
              "end": 590,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 592,
      "end": 636,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 635,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 596,
            "end": 597,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 600,
            "end": 635,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 600,
              "end": 616,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 619,
              "end": 635,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 637,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 641,
          "end": 673,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 641,
            "end": 642,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 645,
            "end": 673,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 645,
              "end": 661,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 665,
              "end": 673,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 675,
      "end": 700,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 679,
          "end": 699,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 679,
            "end": 680,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 683,
            "end": 699,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 683,
              "end": 686,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 691,
              "end": 699,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 739,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 705,
          "end": 738,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 705,
            "end": 706,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 709,
            "end": 738,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 709,
              "end": 717,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 722,
              "end": 738,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
