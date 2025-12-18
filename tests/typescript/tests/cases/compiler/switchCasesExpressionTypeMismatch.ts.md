__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 10,
        "end": 13
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 23,
        "end": 24
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 40
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 42,
              "end": 48
            }
          ],
          "start": 32,
          "end": 48
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "sss",
            "raw": "\"sss\"",
            "start": 70,
            "end": 75
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 77,
              "end": 83
            }
          ],
          "start": 65,
          "end": 83
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 103,
            "end": 106
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 108,
              "end": 114
            }
          ],
          "start": 98,
          "end": 114
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 136,
            "end": 140
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 142,
              "end": 148
            }
          ],
          "start": 131,
          "end": 148
        }
      ],
      "start": 15,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "start": 175,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 184
        }
      ],
      "declare": true,
      "start": 163,
      "end": 184
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 200,
                    "end": 206
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 209,
                      "end": 216
                    },
                    "start": 209,
                    "end": 216
                  }
                ],
                "start": 200,
                "end": 216
              },
              "start": 198,
              "end": 216
            },
            "start": 197,
            "end": 216
          },
          "init": null,
          "definite": false,
          "start": 197,
          "end": 216
        }
      ],
      "declare": true,
      "start": 185,
      "end": 216
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 227
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 243,
              "end": 248
            }
          ],
          "start": 235,
          "end": 248
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 258,
            "end": 260
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 262,
              "end": 267
            }
          ],
          "start": 253,
          "end": 267
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 277,
            "end": 281
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 283,
              "end": 288
            }
          ],
          "start": 272,
          "end": 288
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 307,
            "end": 314
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 316,
              "end": 321
            }
          ],
          "start": 302,
          "end": 321
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "world",
            "raw": "\"world\"",
            "start": 331,
            "end": 338
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 340,
              "end": 345
            }
          ],
          "start": 326,
          "end": 345
        }
      ],
      "start": 218,
      "end": 356
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 365,
                "end": 368
              },
              "start": 363,
              "end": 368
            },
            "start": 362,
            "end": 368
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 371,
            "end": 372
          },
          "definite": false,
          "start": 362,
          "end": 372
        }
      ],
      "declare": false,
      "start": 358,
      "end": 373
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 404
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 420
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 422,
              "end": 428
            }
          ],
          "start": 412,
          "end": 428
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "sss",
            "raw": "\"sss\"",
            "start": 438,
            "end": 443
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 445,
              "end": 451
            }
          ],
          "start": 433,
          "end": 451
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 461,
            "end": 464
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 466,
              "end": 472
            }
          ],
          "start": 456,
          "end": 472
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 482,
            "end": 486
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 488,
              "end": 494
            }
          ],
          "start": 477,
          "end": 494
        }
      ],
      "start": 395,
      "end": 496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 496
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9,
    "range": [
      6,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 32,
    "end": 36,
    "range": [
      32,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 37,
    "end": 40,
    "range": [
      37,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 42,
    "end": 47,
    "range": [
      42,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "String",
    "value": "\"sss\"",
    "start": 70,
    "end": 75,
    "range": [
      70,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 98,
    "end": 102,
    "range": [
      98,
      102
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 108,
    "end": 113,
    "range": [
      108,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 131,
    "end": 135,
    "range": [
      131,
      135
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 136,
    "end": 140,
    "range": [
      136,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 163,
    "end": 170,
    "range": [
      163,
      170
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 171,
    "end": 174,
    "range": [
      171,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 185,
    "end": 192,
    "range": [
      185,
      192
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 235,
    "end": 239,
    "range": [
      235,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 243,
    "end": 248,
    "range": [
      243,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 253,
    "end": 257,
    "range": [
      253,
      257
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 258,
    "end": 260,
    "range": [
      258,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 262,
    "end": 267,
    "range": [
      262,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 272,
    "end": 276,
    "range": [
      272,
      276
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 277,
    "end": 281,
    "range": [
      277,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 283,
    "end": 288,
    "range": [
      283,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 302,
    "end": 306,
    "range": [
      302,
      306
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 307,
    "end": 314,
    "range": [
      307,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 316,
    "end": 321,
    "range": [
      316,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 326,
    "end": 330,
    "range": [
      326,
      330
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 331,
    "end": 338,
    "range": [
      331,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 340,
    "end": 345,
    "range": [
      340,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 358,
    "end": 361,
    "range": [
      358,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 365,
    "end": 368,
    "range": [
      365,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 412,
    "end": 416,
    "range": [
      412,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 417,
    "end": 420,
    "range": [
      417,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 422,
    "end": 427,
    "range": [
      422,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 433,
    "end": 437,
    "range": [
      433,
      437
    ]
  },
  {
    "type": "String",
    "value": "\"sss\"",
    "start": 438,
    "end": 443,
    "range": [
      438,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 445,
    "end": 450,
    "range": [
      445,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 456,
    "end": 460,
    "range": [
      456,
      460
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 466,
    "end": 471,
    "range": [
      466,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 477,
    "end": 481,
    "range": [
      477,
      481
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 482,
    "end": 486,
    "range": [
      482,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 488,
    "end": 493,
    "range": [
      488,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  }
]
```
