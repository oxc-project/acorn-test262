__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 763,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 38,
            "name": "abc",
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
                  "value": "ABC",
                  "raw": "\"ABC\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 41,
            "end": 46,
            "value": "ABC",
            "raw": "\"ABC\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 62,
            "name": "xyz",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 62,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 57,
                "end": 62,
                "literal": {
                  "type": "Literal",
                  "start": 57,
                  "end": 62,
                  "value": "XYZ",
                  "raw": "\"XYZ\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 65,
            "end": 70,
            "value": "XYZ",
            "raw": "\"XYZ\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 99,
            "name": "abcOrXyz",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 99,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 86,
                "end": 99,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 86,
                    "end": 91,
                    "literal": {
                      "type": "Literal",
                      "start": 86,
                      "end": 91,
                      "value": "ABC",
                      "raw": "\"ABC\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 94,
                    "end": 99,
                    "literal": {
                      "type": "Literal",
                      "start": 94,
                      "end": 99,
                      "value": "XYZ",
                      "raw": "\"XYZ\""
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 102,
            "end": 112,
            "left": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "name": "xyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 158,
            "name": "abcOrXyzOrNumber",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 158,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 136,
                "end": 158,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 136,
                    "end": 141,
                    "literal": {
                      "type": "Literal",
                      "start": 136,
                      "end": 141,
                      "value": "ABC",
                      "raw": "\"ABC\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 144,
                    "end": 149,
                    "literal": {
                      "type": "Literal",
                      "start": 144,
                      "end": 149,
                      "value": "XYZ",
                      "raw": "\"XYZ\""
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 152,
                    "end": 158
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 161,
            "end": 176,
            "left": {
              "type": "Identifier",
              "start": 161,
              "end": 169,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 173,
              "end": 176,
              "value": 100,
              "raw": "100"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 187,
            "end": 195,
            "left": {
              "type": "Literal",
              "start": 187,
              "end": 189,
              "value": "",
              "raw": "\"\""
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 205,
            "end": 213,
            "left": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 211,
              "end": 213,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 223,
            "end": 231,
            "left": {
              "type": "Literal",
              "start": 223,
              "end": 225,
              "value": 10,
              "raw": "10"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 238,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 241,
            "end": 249,
            "left": {
              "type": "Identifier",
              "start": 241,
              "end": 244,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 247,
              "end": 249,
              "value": 10,
              "raw": "10"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 259,
            "end": 268,
            "left": {
              "type": "Identifier",
              "start": 259,
              "end": 262,
              "name": "xyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 265,
              "end": 268,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 278,
            "end": 287,
            "left": {
              "type": "Identifier",
              "start": 278,
              "end": 281,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 284,
              "end": 287,
              "name": "xyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 307,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 297,
            "end": 307,
            "left": {
              "type": "Literal",
              "start": 297,
              "end": 301,
              "value": true,
              "raw": "true"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 304,
              "end": 307,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 314,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 317,
            "end": 327,
            "left": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 323,
              "end": 327,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 337,
            "end": 357,
            "left": {
              "type": "BinaryExpression",
              "start": 337,
              "end": 351,
              "left": {
                "type": "Identifier",
                "start": 337,
                "end": 340,
                "name": "abc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 343,
                "end": 351,
                "name": "abcOrXyz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "name": "xyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 367,
            "end": 386,
            "left": {
              "type": "Identifier",
              "start": 367,
              "end": 375,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 378,
              "end": 386,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 392,
          "end": 405,
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 393,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 396,
            "end": 405,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 397,
              "end": 405,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 407,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "name": "l",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 424,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 416,
              "end": 424,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 431,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 434,
            "end": 455,
            "left": {
              "type": "Identifier",
              "start": 434,
              "end": 450,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 453,
              "end": 455,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 461,
          "end": 486,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 462,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 465,
            "end": 486,
            "left": {
              "type": "Literal",
              "start": 465,
              "end": 467,
              "value": "",
              "raw": "\"\""
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 470,
              "end": 486,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 523,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 496,
            "end": 523,
            "left": {
              "type": "Identifier",
              "start": 496,
              "end": 512,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 515,
              "end": 523,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 525,
      "end": 561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 560,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 530,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 533,
            "end": 560,
            "left": {
              "type": "Identifier",
              "start": 533,
              "end": 541,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 544,
              "end": 560,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 587,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 567,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 570,
            "end": 587,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 571,
              "end": 587,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 589,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 593,
          "end": 614,
          "id": {
            "type": "Identifier",
            "start": 593,
            "end": 594,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 597,
            "end": 614,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 598,
              "end": 614,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 616,
      "end": 660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 659,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 624,
            "end": 659,
            "left": {
              "type": "Identifier",
              "start": 624,
              "end": 640,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 643,
              "end": 659,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 661,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 697,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 666,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 669,
            "end": 697,
            "left": {
              "type": "Identifier",
              "start": 669,
              "end": 685,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 689,
              "end": 697,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 699,
      "end": 724,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 703,
          "end": 723,
          "id": {
            "type": "Identifier",
            "start": 703,
            "end": 704,
            "name": "u",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 707,
            "end": 723,
            "left": {
              "type": "Identifier",
              "start": 707,
              "end": 710,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 715,
              "end": 723,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 725,
      "end": 763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 762,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 730,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 733,
            "end": 762,
            "left": {
              "type": "Identifier",
              "start": 733,
              "end": 741,
              "name": "abcOrXyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 746,
              "end": 762,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
