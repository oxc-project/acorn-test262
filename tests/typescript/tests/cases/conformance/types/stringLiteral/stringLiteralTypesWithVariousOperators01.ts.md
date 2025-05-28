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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
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
                  "value": "ABC",
                  "raw": "\"ABC\""
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 22,
            "value": "ABC",
            "raw": "\"ABC\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 47,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 46,
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
                  "value": "XYZ",
                  "raw": "\"XYZ\""
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 41,
            "end": 46,
            "value": "XYZ",
            "raw": "\"XYZ\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 89,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 88,
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
                      "value": "ABC",
                      "raw": "\"ABC\""
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
                      "value": "XYZ",
                      "raw": "\"XYZ\""
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
            "left": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 153,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 152,
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
                      "value": "ABC",
                      "raw": "\"ABC\""
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
                      "value": "XYZ",
                      "raw": "\"XYZ\""
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
            "left": {
              "type": "Identifier",
              "start": 137,
              "end": 145,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 149,
              "end": 152,
              "value": 100,
              "raw": "100"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 172,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 171,
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
            "left": {
              "type": "Literal",
              "start": 163,
              "end": 165,
              "value": "",
              "raw": "\"\""
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 190,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 189,
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
            "left": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 187,
              "end": 189,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 208,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 207,
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
            "left": {
              "type": "Literal",
              "start": 199,
              "end": 201,
              "value": 10,
              "raw": "10"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 204,
              "end": 207,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 226,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 225,
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
            "left": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 223,
              "end": 225,
              "value": 10,
              "raw": "10"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 245,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 244,
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
            "left": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 241,
              "end": 244,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 264,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 263,
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
            "left": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 260,
              "end": 263,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 284,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 283,
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
            "left": {
              "type": "Literal",
              "start": 273,
              "end": 277,
              "value": true,
              "raw": "true"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 280,
              "end": 283,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 304,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 303,
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
            "left": {
              "type": "Identifier",
              "start": 293,
              "end": 296,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 299,
              "end": 303,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 334,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 333,
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
            "left": {
              "type": "BinaryExpression",
              "start": 313,
              "end": 327,
              "left": {
                "type": "Identifier",
                "start": 313,
                "end": 316,
                "decorators": [],
                "name": "abc",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
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
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 330,
              "end": 333,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 363,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 362,
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
            "left": {
              "type": "Identifier",
              "start": 343,
              "end": 351,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 362,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 382,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 381,
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
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 373,
              "end": 381,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 401,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 400,
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
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "start": 392,
              "end": 400,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 432,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 431,
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
            "left": {
              "type": "Identifier",
              "start": 410,
              "end": 426,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 429,
              "end": 431,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 463,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 462,
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
            "left": {
              "type": "Literal",
              "start": 441,
              "end": 443,
              "value": "",
              "raw": "\"\""
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 446,
              "end": 462,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 500,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 499,
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
            "left": {
              "type": "Identifier",
              "start": 472,
              "end": 488,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 491,
              "end": 499,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 537,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 536,
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
            "left": {
              "type": "Identifier",
              "start": 509,
              "end": 517,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 520,
              "end": 536,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 538,
      "end": 564,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 563,
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
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "start": 547,
              "end": 563,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 591,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 590,
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
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "start": 574,
              "end": 590,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 592,
      "end": 636,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 635,
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
            "left": {
              "type": "Identifier",
              "start": 600,
              "end": 616,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 619,
              "end": 635,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 637,
      "end": 674,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 641,
          "end": 673,
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
            "left": {
              "type": "Identifier",
              "start": 645,
              "end": 661,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 665,
              "end": 673,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 675,
      "end": 700,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 679,
          "end": 699,
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
            "left": {
              "type": "Identifier",
              "start": 683,
              "end": 686,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 691,
              "end": 699,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 739,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 705,
          "end": 738,
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
            "left": {
              "type": "Identifier",
              "start": 709,
              "end": 717,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 722,
              "end": 738,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
