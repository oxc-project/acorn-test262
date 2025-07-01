__ESTREE_TEST__:PASS:
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
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 163,
              "end": 165
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "start": 163,
            "end": 171
          },
          "definite": false,
          "start": 159,
          "end": 171
        }
      ],
      "declare": false,
      "start": 155,
      "end": 172
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
            "start": 177,
            "end": 178
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 184
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 187,
              "end": 189
            },
            "start": 181,
            "end": 189
          },
          "definite": false,
          "start": 177,
          "end": 189
        }
      ],
      "declare": false,
      "start": 173,
      "end": 190
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
            "start": 195,
            "end": 196
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 199,
              "end": 201
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 207
            },
            "start": 199,
            "end": 207
          },
          "definite": false,
          "start": 195,
          "end": 207
        }
      ],
      "declare": false,
      "start": 191,
      "end": 208
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
            "start": 213,
            "end": 214
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 223,
              "end": 225
            },
            "start": 217,
            "end": 225
          },
          "definite": false,
          "start": 213,
          "end": 225
        }
      ],
      "declare": false,
      "start": 209,
      "end": 226
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
            "start": 231,
            "end": 232
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 238
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 244
            },
            "start": 235,
            "end": 244
          },
          "definite": false,
          "start": 231,
          "end": 244
        }
      ],
      "declare": false,
      "start": 227,
      "end": 245
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
            "start": 250,
            "end": 251
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 257
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 263
            },
            "start": 254,
            "end": 263
          },
          "definite": false,
          "start": 250,
          "end": 263
        }
      ],
      "declare": false,
      "start": 246,
      "end": 264
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
            "start": 269,
            "end": 270
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 273,
              "end": 277
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 283
            },
            "start": 273,
            "end": 283
          },
          "definite": false,
          "start": 269,
          "end": 283
        }
      ],
      "declare": false,
      "start": 265,
      "end": 284
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
            "start": 289,
            "end": 290
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 296
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 299,
              "end": 303
            },
            "start": 293,
            "end": 303
          },
          "definite": false,
          "start": 289,
          "end": 303
        }
      ],
      "declare": false,
      "start": 285,
      "end": 304
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
            "start": 309,
            "end": 310
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "abc",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 316
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "abcOrXyz",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 327
              },
              "start": 313,
              "end": 327
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 333
            },
            "start": 313,
            "end": 333
          },
          "definite": false,
          "start": 309,
          "end": 333
        }
      ],
      "declare": false,
      "start": 305,
      "end": 334
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
            "start": 339,
            "end": 340
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 351
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 362
            },
            "start": 343,
            "end": 362
          },
          "definite": false,
          "start": 339,
          "end": 362
        }
      ],
      "declare": false,
      "start": 335,
      "end": 363
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
            "start": 368,
            "end": 369
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 381
            },
            "prefix": true,
            "start": 372,
            "end": 381
          },
          "definite": false,
          "start": 368,
          "end": 381
        }
      ],
      "declare": false,
      "start": 364,
      "end": 382
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
            "start": 387,
            "end": 388
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 400
            },
            "prefix": true,
            "start": 391,
            "end": 400
          },
          "definite": false,
          "start": 387,
          "end": 400
        }
      ],
      "declare": false,
      "start": 383,
      "end": 401
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 407
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 426
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 429,
              "end": 431
            },
            "start": 410,
            "end": 431
          },
          "definite": false,
          "start": 406,
          "end": 431
        }
      ],
      "declare": false,
      "start": 402,
      "end": 432
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 438
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 441,
              "end": 443
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 462
            },
            "start": 441,
            "end": 462
          },
          "definite": false,
          "start": 437,
          "end": 462
        }
      ],
      "declare": false,
      "start": 433,
      "end": 463
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 469
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 488
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 499
            },
            "start": 472,
            "end": 499
          },
          "definite": false,
          "start": 468,
          "end": 499
        }
      ],
      "declare": false,
      "start": 464,
      "end": 500
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 506
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 517
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 536
            },
            "start": 509,
            "end": 536
          },
          "definite": false,
          "start": 505,
          "end": 536
        }
      ],
      "declare": false,
      "start": 501,
      "end": 537
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 543
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 563
            },
            "prefix": true,
            "start": 546,
            "end": 563
          },
          "definite": false,
          "start": 542,
          "end": 563
        }
      ],
      "declare": false,
      "start": 538,
      "end": 564
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 569,
            "end": 570
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 590
            },
            "prefix": true,
            "start": 573,
            "end": 590
          },
          "definite": false,
          "start": 569,
          "end": 590
        }
      ],
      "declare": false,
      "start": 565,
      "end": 591
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 597
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 616
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 635
            },
            "start": 600,
            "end": 635
          },
          "definite": false,
          "start": 596,
          "end": 635
        }
      ],
      "declare": false,
      "start": 592,
      "end": 636
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 642
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 661
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 673
            },
            "start": 645,
            "end": 673
          },
          "definite": false,
          "start": 641,
          "end": 673
        }
      ],
      "declare": false,
      "start": 637,
      "end": 674
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 680
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 686
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 699
            },
            "start": 683,
            "end": 699
          },
          "definite": false,
          "start": 679,
          "end": 699
        }
      ],
      "declare": false,
      "start": 675,
      "end": 700
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 705,
            "end": 706
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 717
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "abcOrXyzOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 738
            },
            "start": 709,
            "end": 738
          },
          "definite": false,
          "start": 705,
          "end": 738
        }
      ],
      "declare": false,
      "start": 701,
      "end": 739
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 739
}
```
