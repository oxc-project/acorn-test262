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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 38,
            "decorators": [],
            "name": "abc",
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
                  "raw": "\"ABC\"",
                  "value": "ABC"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 41,
            "end": 46,
            "raw": "\"ABC\"",
            "value": "ABC"
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 62,
            "decorators": [],
            "name": "xyz",
            "optional": false,
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
                  "raw": "\"XYZ\"",
                  "value": "XYZ"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 65,
            "end": 70,
            "raw": "\"XYZ\"",
            "value": "XYZ"
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 99,
            "decorators": [],
            "name": "abcOrXyz",
            "optional": false,
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
                      "raw": "\"ABC\"",
                      "value": "ABC"
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
                      "raw": "\"XYZ\"",
                      "value": "XYZ"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 102,
            "end": 112,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "decorators": [],
              "name": "xyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 158,
            "decorators": [],
            "name": "abcOrXyzOrNumber",
            "optional": false,
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
                      "raw": "\"ABC\"",
                      "value": "ABC"
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
                      "raw": "\"XYZ\"",
                      "value": "XYZ"
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 152,
                    "end": 158
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 161,
            "end": 176,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 161,
              "end": 169,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 173,
              "end": 176,
              "raw": "100",
              "value": 100
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 187,
            "end": 195,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 187,
              "end": 189,
              "raw": "\"\"",
              "value": ""
            },
            "right": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "abc",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 205,
            "end": 213,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 211,
              "end": 213,
              "raw": "\"\"",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 223,
            "end": 231,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 223,
              "end": 225,
              "raw": "10",
              "value": 10
            },
            "right": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "decorators": [],
              "name": "abc",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 238,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 241,
            "end": 249,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 241,
              "end": 244,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 247,
              "end": 249,
              "raw": "10",
              "value": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 259,
            "end": 268,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 259,
              "end": 262,
              "decorators": [],
              "name": "xyz",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 265,
              "end": 268,
              "decorators": [],
              "name": "abc",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 278,
            "end": 287,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 278,
              "end": 281,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 284,
              "end": 287,
              "decorators": [],
              "name": "xyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 297,
            "end": 307,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 297,
              "end": 301,
              "raw": "true",
              "value": true
            },
            "right": {
              "type": "Identifier",
              "start": 304,
              "end": 307,
              "decorators": [],
              "name": "abc",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 314,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 317,
            "end": 327,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 323,
              "end": 327,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 337,
            "end": 357,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 337,
              "end": 351,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 337,
                "end": 340,
                "decorators": [],
                "name": "abc",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 343,
                "end": 351,
                "decorators": [],
                "name": "abcOrXyz",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "decorators": [],
              "name": "xyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "decorators": [],
            "name": "j",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 367,
            "end": 386,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 367,
              "end": 375,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 378,
              "end": 386,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 393,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 396,
            "end": 405,
            "argument": {
              "type": "Identifier",
              "start": 397,
              "end": 405,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
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
      "start": 407,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 424,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "decorators": [],
            "name": "l",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 424,
            "argument": {
              "type": "Identifier",
              "start": 416,
              "end": 424,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
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
      "start": 426,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 455,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 431,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 434,
            "end": 455,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 434,
              "end": 450,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 453,
              "end": 455,
              "raw": "\"\"",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 462,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 465,
            "end": 486,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 465,
              "end": 467,
              "raw": "\"\"",
              "value": ""
            },
            "right": {
              "type": "Identifier",
              "start": 470,
              "end": 486,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 496,
            "end": 523,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 496,
              "end": 512,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 515,
              "end": 523,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 530,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 533,
            "end": 560,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 533,
              "end": 541,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 544,
              "end": 560,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 567,
            "decorators": [],
            "name": "q",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 570,
            "end": 587,
            "argument": {
              "type": "Identifier",
              "start": 571,
              "end": 587,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
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
      "start": 589,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 593,
          "end": 614,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 593,
            "end": 594,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 597,
            "end": 614,
            "argument": {
              "type": "Identifier",
              "start": 598,
              "end": 614,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
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
      "start": 616,
      "end": 660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 659,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 624,
            "end": 659,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 624,
              "end": 640,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 643,
              "end": 659,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 666,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 669,
            "end": 697,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 669,
              "end": 685,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 689,
              "end": 697,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 703,
            "end": 704,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 707,
            "end": 723,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 707,
              "end": 710,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 715,
              "end": 723,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 730,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 733,
            "end": 762,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 733,
              "end": 741,
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 746,
              "end": 762,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
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
