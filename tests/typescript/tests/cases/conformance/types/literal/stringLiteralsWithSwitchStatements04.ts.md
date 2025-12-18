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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 7,
                  "end": 12
                },
                "start": 7,
                "end": 12
              },
              "start": 5,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "y",
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
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 21,
                      "end": 26
                    },
                    "start": 21,
                    "end": 26
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 29,
                      "end": 34
                    },
                    "start": 29,
                    "end": 34
                  }
                ],
                "start": 21,
                "end": 34
              },
              "start": 19,
              "end": 34
            },
            "start": 18,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 34
        }
      ],
      "declare": false,
      "start": 14,
      "end": 35
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 63
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 67,
          "end": 74
        },
        "start": 65,
        "end": 74
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 75
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 86
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 99,
                "end": 104
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              }
            ],
            "start": 99,
            "end": 107
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 117,
              "end": 123
            }
          ],
          "start": 94,
          "end": 123
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 136,
                "end": 141
              }
            ],
            "start": 133,
            "end": 141
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 151,
              "end": 157
            }
          ],
          "start": 128,
          "end": 157
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 168
              },
              {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 170,
                "end": 175
              }
            ],
            "start": 167,
            "end": 175
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 185,
              "end": 191
            }
          ],
          "start": 162,
          "end": 191
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 201,
                "end": 206
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              }
            ],
            "start": 201,
            "end": 209
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 219,
              "end": 225
            }
          ],
          "start": 196,
          "end": 225
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 235,
              "end": 240
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 244,
              "end": 249
            },
            "start": 235,
            "end": 249
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 259,
              "end": 265
            }
          ],
          "start": 230,
          "end": 265
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 275,
              "end": 280
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 285,
                "end": 290
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 294,
                "end": 299
              },
              "start": 285,
              "end": 299
            },
            "start": 275,
            "end": 300
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 310,
              "end": 316
            }
          ],
          "start": 270,
          "end": 316
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 326,
              "end": 331
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 336,
                "end": 341
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 345,
                "end": 350
              },
              "start": 336,
              "end": 350
            },
            "start": 326,
            "end": 351
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 361,
              "end": 367
            }
          ],
          "start": 321,
          "end": 367
        }
      ],
      "start": 77,
      "end": 369
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 369
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6,
    "range": [
      5,
      6
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 14,
    "end": 17,
    "range": [
      14,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 21,
    "end": 26,
    "range": [
      21,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 29,
    "end": 34,
    "range": [
      29,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 38,
    "end": 45,
    "range": [
      38,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54,
    "range": [
      46,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 55,
    "end": 63,
    "range": [
      55,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 67,
    "end": 74,
    "range": [
      67,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 77,
    "end": 83,
    "range": [
      77,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 94,
    "end": 98,
    "range": [
      94,
      98
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 99,
    "end": 104,
    "range": [
      99,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 117,
    "end": 122,
    "range": [
      117,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 128,
    "end": 132,
    "range": [
      128,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 136,
    "end": 141,
    "range": [
      136,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 162,
    "end": 166,
    "range": [
      162,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 170,
    "end": 175,
    "range": [
      170,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 185,
    "end": 190,
    "range": [
      185,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 196,
    "end": 200,
    "range": [
      196,
      200
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 201,
    "end": 206,
    "range": [
      201,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 230,
    "end": 234,
    "range": [
      230,
      234
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 235,
    "end": 240,
    "range": [
      235,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 241,
    "end": 243,
    "range": [
      241,
      243
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 244,
    "end": 249,
    "range": [
      244,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 259,
    "end": 264,
    "range": [
      259,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 270,
    "end": 274,
    "range": [
      270,
      274
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 275,
    "end": 280,
    "range": [
      275,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 281,
    "end": 283,
    "range": [
      281,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 285,
    "end": 290,
    "range": [
      285,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 291,
    "end": 293,
    "range": [
      291,
      293
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 294,
    "end": 299,
    "range": [
      294,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 310,
    "end": 315,
    "range": [
      310,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 321,
    "end": 325,
    "range": [
      321,
      325
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 326,
    "end": 331,
    "range": [
      326,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 332,
    "end": 334,
    "range": [
      332,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 336,
    "end": 341,
    "range": [
      336,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 342,
    "end": 344,
    "range": [
      342,
      344
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 345,
    "end": 350,
    "range": [
      345,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 361,
    "end": 366,
    "range": [
      361,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  }
]
```
