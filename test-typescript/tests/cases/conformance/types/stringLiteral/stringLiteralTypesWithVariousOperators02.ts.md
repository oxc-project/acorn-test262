__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 508,
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
                  "value": "ABC"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 22,
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
                  "value": "XYZ"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 41,
            "end": 46,
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
                      "value": "ABC"
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
                      "value": "XYZ"
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
                      "value": "ABC"
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
                      "value": "XYZ"
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
      "start": 155,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 185,
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
            "end": 185,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 163,
              "end": 179,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 182,
              "end": 185,
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
      "start": 187,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 195,
            "end": 217,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 195,
              "end": 198,
              "raw": "100",
              "value": 100
            },
            "right": {
              "type": "Identifier",
              "start": 201,
              "end": 217,
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
      "start": 219,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 227,
            "end": 262,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 227,
              "end": 243,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 246,
              "end": 262,
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
      "start": 264,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 295,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 272,
            "end": 295,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 288,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 291,
              "end": 295,
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
      "start": 297,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 305,
            "end": 329,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 305,
              "end": 310,
              "raw": "false",
              "value": false
            },
            "right": {
              "type": "Identifier",
              "start": 313,
              "end": 329,
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
      "start": 331,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 339,
            "end": 357,
            "argument": {
              "type": "Identifier",
              "start": 339,
              "end": 355,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
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
      "start": 359,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 367,
            "end": 385,
            "argument": {
              "type": "Identifier",
              "start": 369,
              "end": 385,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
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
      "start": 387,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 416,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 395,
            "end": 416,
            "operator": "^",
            "left": {
              "type": "Identifier",
              "start": 395,
              "end": 411,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 414,
              "end": 416,
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
      "start": 418,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 447,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 423,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 426,
            "end": 447,
            "operator": "|",
            "left": {
              "type": "Identifier",
              "start": 426,
              "end": 442,
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 445,
              "end": 447,
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
      "start": 449,
      "end": 467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 466,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 457,
            "end": 466,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 457,
              "end": 460,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 463,
              "end": 466,
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
      "start": 468,
      "end": 488,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 487,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 473,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 476,
            "end": 487,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 476,
              "end": 479,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 484,
              "end": 487,
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
      "start": 489,
      "end": 508,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 507,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 497,
            "end": 507,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 497,
              "end": 500,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 504,
              "end": 507,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
