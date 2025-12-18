__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "ABC",
                  "raw": "\"ABC\"",
                  "start": 9,
                  "end": 14
                },
                "start": 9,
                "end": 14
              },
              "start": 7,
              "end": 14
            },
            "start": 4,
            "end": 14
          },
          "init": {
            "type": "Literal",
            "value": "ABC",
            "raw": "\"ABC\"",
            "start": 17,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "XYZ",
                  "raw": "\"XYZ\"",
                  "start": 33,
                  "end": 38
                },
                "start": 33,
                "end": 38
              },
              "start": 31,
              "end": 38
            },
            "start": 28,
            "end": 38
          },
          "init": {
            "type": "Literal",
            "value": "XYZ",
            "raw": "\"XYZ\"",
            "start": 41,
            "end": 46
          },
          "definite": false,
          "start": 28,
          "end": 46
        }
      ],
      "declare": false,
      "start": 24,
      "end": 47
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abcOrXyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ABC",
                      "raw": "\"ABC\"",
                      "start": 62,
                      "end": 67
                    },
                    "start": 62,
                    "end": 67
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "XYZ",
                      "raw": "\"XYZ\"",
                      "start": 70,
                      "end": 75
                    },
                    "start": 70,
                    "end": 75
                  }
                ],
                "start": 62,
                "end": 75
              },
              "start": 60,
              "end": 75
            },
            "start": 52,
            "end": 75
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 81
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 88
            },
            "start": 78,
            "end": 88
          },
          "definite": false,
          "start": 52,
          "end": 88
        }
      ],
      "declare": false,
      "start": 48,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abcOrXyzOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ABC",
                      "raw": "\"ABC\"",
                      "start": 112,
                      "end": 117
                    },
                    "start": 112,
                    "end": 117
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "XYZ",
                      "raw": "\"XYZ\"",
                      "start": 120,
                      "end": 125
                    },
                    "start": 120,
                    "end": 125
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 128,
                    "end": 134
                  }
                ],
                "start": 112,
                "end": 134
              },
              "start": 110,
              "end": 134
            },
            "start": 94,
            "end": 134
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 145
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 149,
              "end": 152
            },
            "start": 137,
            "end": 152
          },
          "definite": false,
          "start": 94,
          "end": 152
        }
      ],
      "declare": false,
      "start": 90,
      "end": 153
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 179
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 182,
              "end": 185
            },
            "start": 163,
            "end": 185
          },
          "definite": false,
          "start": 159,
          "end": 185
        }
      ],
      "declare": false,
      "start": 155,
      "end": 186
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 192
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 195,
              "end": 198
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 217
            },
            "start": 195,
            "end": 217
          },
          "definite": false,
          "start": 191,
          "end": 217
        }
      ],
      "declare": false,
      "start": 187,
      "end": 218
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 243
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 262
            },
            "start": 227,
            "end": 262
          },
          "definite": false,
          "start": 223,
          "end": 262
        }
      ],
      "declare": false,
      "start": 219,
      "end": 263
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 269
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 288
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 291,
              "end": 295
            },
            "start": 272,
            "end": 295
          },
          "definite": false,
          "start": 268,
          "end": 295
        }
      ],
      "declare": false,
      "start": 264,
      "end": 296
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 305,
              "end": 310
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 329
            },
            "start": 305,
            "end": 329
          },
          "definite": false,
          "start": 301,
          "end": 329
        }
      ],
      "declare": false,
      "start": 297,
      "end": 330
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 336
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 355
            },
            "start": 339,
            "end": 357
          },
          "definite": false,
          "start": 335,
          "end": 357
        }
      ],
      "declare": false,
      "start": 331,
      "end": 358
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 364
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 385
            },
            "start": 367,
            "end": 385
          },
          "definite": false,
          "start": 363,
          "end": 385
        }
      ],
      "declare": false,
      "start": 359,
      "end": 386
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 411
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 414,
              "end": 416
            },
            "start": 395,
            "end": 416
          },
          "definite": false,
          "start": 391,
          "end": 416
        }
      ],
      "declare": false,
      "start": 387,
      "end": 417
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 423
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 442
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 445,
              "end": 447
            },
            "start": 426,
            "end": 447
          },
          "definite": false,
          "start": 422,
          "end": 447
        }
      ],
      "declare": false,
      "start": 418,
      "end": 448
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 454
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 460
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 466
            },
            "start": 457,
            "end": 466
          },
          "definite": false,
          "start": 453,
          "end": 466
        }
      ],
      "declare": false,
      "start": 449,
      "end": 467
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 472,
            "end": 473
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 479
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 487
            },
            "start": 476,
            "end": 487
          },
          "definite": false,
          "start": 472,
          "end": 487
        }
      ],
      "declare": false,
      "start": 468,
      "end": 488
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 494
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 500
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 507
            },
            "start": 497,
            "end": 507
          },
          "definite": false,
          "start": 493,
          "end": 507
        }
      ],
      "declare": false,
      "start": 489,
      "end": 508
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 508
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 24,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"XYZ\"",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"XYZ\"",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 52,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 62,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 68,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"XYZ\"",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 82,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 94,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 118,
    "end": 119
  },
  {
    "type": "String",
    "value": "\"XYZ\"",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "abcOrXyz",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 146,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 163,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 201,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 227,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 246,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 272,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 289,
    "end": 290
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 291,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 313,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 339,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 367,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 369,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 395,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 412,
    "end": 413
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "abcOrXyzOrNumber",
    "start": 426,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 443,
    "end": 444
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 476,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 480,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 484,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  }
]
```
