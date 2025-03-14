__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 532,
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
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 209,
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
            "end": 209,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 187,
              "end": 203,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 206,
              "end": 209,
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
      "start": 211,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 219,
            "end": 241,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 219,
              "end": 222,
              "raw": "100",
              "value": 100
            },
            "right": {
              "type": "Identifier",
              "start": 225,
              "end": 241,
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
      "start": 243,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 251,
            "end": 286,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 251,
              "end": 267,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 270,
              "end": 286,
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
      "start": 288,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 319,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 296,
            "end": 319,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 296,
              "end": 312,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 315,
              "end": 319,
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
      "start": 321,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 353,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 326,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 329,
            "end": 353,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 329,
              "end": 334,
              "raw": "false",
              "value": false
            },
            "right": {
              "type": "Identifier",
              "start": 337,
              "end": 353,
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
      "start": 355,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 360,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 363,
            "end": 381,
            "argument": {
              "type": "Identifier",
              "start": 363,
              "end": 379,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 409,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 388,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 391,
            "end": 409,
            "argument": {
              "type": "Identifier",
              "start": 393,
              "end": 409,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 416,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 419,
            "end": 440,
            "operator": "^",
            "left": {
              "type": "Identifier",
              "start": 419,
              "end": 435,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 438,
              "end": 440,
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
      "start": 442,
      "end": 472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 471,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 450,
            "end": 471,
            "operator": "|",
            "left": {
              "type": "Identifier",
              "start": 450,
              "end": 466,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 469,
              "end": 471,
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
      "start": 473,
      "end": 491,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 490,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "decorators": [],
            "name": "j",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 481,
            "end": 490,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 481,
              "end": 484,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 487,
              "end": 490,
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
      "start": 492,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 511,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 500,
            "end": 511,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 500,
              "end": 503,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 508,
              "end": 511,
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
      "start": 513,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 531,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 518,
            "decorators": [],
            "name": "l",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 521,
            "end": 531,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 521,
              "end": 524,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 528,
              "end": 531,
              "decorators": [],
              "name": "xyz",
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
