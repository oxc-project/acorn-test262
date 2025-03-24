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
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 209,
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
            "end": 209,
            "left": {
              "type": "Identifier",
              "start": 187,
              "end": 203,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 206,
              "end": 209,
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
      "start": 211,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 219,
            "end": 241,
            "left": {
              "type": "Literal",
              "start": 219,
              "end": 222,
              "value": 100,
              "raw": "100"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 225,
              "end": 241,
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
      "start": 243,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 251,
            "end": 286,
            "left": {
              "type": "Identifier",
              "start": 251,
              "end": 267,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 270,
              "end": 286,
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
      "start": 288,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 296,
            "end": 319,
            "left": {
              "type": "Identifier",
              "start": 296,
              "end": 312,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 315,
              "end": 319,
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
      "start": 321,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 326,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 329,
            "end": 353,
            "left": {
              "type": "Literal",
              "start": 329,
              "end": 334,
              "value": false,
              "raw": "false"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 337,
              "end": 353,
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
      "start": 355,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 360,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 363,
            "end": 381,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 363,
              "end": 379,
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
      "start": 383,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 388,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 391,
            "end": 409,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 393,
              "end": 409,
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
      "start": 411,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 416,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 419,
            "end": 440,
            "left": {
              "type": "Identifier",
              "start": 419,
              "end": 435,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "start": 438,
              "end": 440,
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
      "start": 442,
      "end": 472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 450,
            "end": 471,
            "left": {
              "type": "Identifier",
              "start": 450,
              "end": 466,
              "name": "abcOrXyzOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "start": 469,
              "end": 471,
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
      "start": 473,
      "end": 491,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 490,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 481,
            "end": 490,
            "left": {
              "type": "Identifier",
              "start": 481,
              "end": 484,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 487,
              "end": 490,
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
      "start": 492,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 511,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 500,
            "end": 511,
            "left": {
              "type": "Identifier",
              "start": 500,
              "end": 503,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 508,
              "end": 511,
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
      "start": 513,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 518,
            "name": "l",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 521,
            "end": 531,
            "left": {
              "type": "Identifier",
              "start": 521,
              "end": 524,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 528,
              "end": 531,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
