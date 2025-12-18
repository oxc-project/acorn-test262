__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 14,
                  "end": 20
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 23,
                  "end": 29
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 32,
                  "end": 39
                }
              ],
              "start": 14,
              "end": 39
            },
            "start": 12,
            "end": 39
          },
          "start": 11,
          "end": 39
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 54,
                          "end": 60
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 63,
                          "end": 69
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 72,
                          "end": 79
                        }
                      ],
                      "start": 54,
                      "end": 79
                    },
                    "start": 52,
                    "end": 79
                  },
                  "start": 51,
                  "end": 79
                },
                "init": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 82,
                  "end": 87
                },
                "definite": false,
                "start": 51,
                "end": 87
              }
            ],
            "declare": false,
            "start": 47,
            "end": 88
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 100,
                          "end": 106
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 109,
                          "end": 115
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 118,
                          "end": 125
                        }
                      ],
                      "start": 100,
                      "end": 125
                    },
                    "start": 98,
                    "end": 125
                  },
                  "start": 97,
                  "end": 125
                },
                "init": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 128,
                  "end": 133
                },
                "definite": false,
                "start": 97,
                "end": 133
              }
            ],
            "declare": false,
            "start": 93,
            "end": 134
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 144
                  },
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 147,
                    "end": 149
                  },
                  "start": 143,
                  "end": 149
                },
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 159
                    },
                    "prefix": true,
                    "start": 151,
                    "end": 159
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 164,
                    "end": 172
                  },
                  "start": 151,
                  "end": 172
                }
              ],
              "start": 143,
              "end": 172
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 184,
                    "end": 185
                  },
                  "directive": null,
                  "start": 184,
                  "end": 186
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 206
                  },
                  "directive": null,
                  "start": 205,
                  "end": 207
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 227
                  },
                  "directive": null,
                  "start": 226,
                  "end": 228
                }
              ],
              "start": 174,
              "end": 245
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 260
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 263,
                      "end": 264
                    },
                    "start": 259,
                    "end": 264
                  },
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 273,
                        "end": 274
                      },
                      "prefix": true,
                      "start": 266,
                      "end": 274
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 279,
                      "end": 287
                    },
                    "start": 266,
                    "end": 287
                  }
                ],
                "start": 259,
                "end": 287
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "directive": null,
                    "start": 299,
                    "end": 301
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 321
                    },
                    "directive": null,
                    "start": 320,
                    "end": 322
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 342
                    },
                    "directive": null,
                    "start": 341,
                    "end": 343
                  }
                ],
                "start": 289,
                "end": 359
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 380
                    },
                    "directive": null,
                    "start": 379,
                    "end": 381
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 402
                    },
                    "directive": null,
                    "start": 401,
                    "end": 403
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 423
                    },
                    "directive": null,
                    "start": 422,
                    "end": 424
                  }
                ],
                "start": 369,
                "end": 440
              },
              "start": 255,
              "end": 440
            },
            "start": 139,
            "end": 440
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "directive": null,
            "start": 445,
            "end": 447
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 482
            },
            "directive": null,
            "start": 481,
            "end": 483
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
            },
            "directive": null,
            "start": 498,
            "end": 500
          }
        ],
        "start": 41,
        "end": 522
      },
      "expression": false,
      "start": 0,
      "end": 522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 522
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 14,
    "end": 20,
    "range": [
      14,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 32,
    "end": 39,
    "range": [
      32,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 47,
    "end": 50,
    "range": [
      47,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 72,
    "end": 79,
    "range": [
      72,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 93,
    "end": 96,
    "range": [
      93,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 118,
    "end": 125,
    "range": [
      118,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 139,
    "end": 141,
    "range": [
      139,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 147,
    "end": 149,
    "range": [
      147,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 151,
    "end": 157,
    "range": [
      151,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 164,
    "end": 172,
    "range": [
      164,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 255,
    "end": 257,
    "range": [
      255,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 279,
    "end": 287,
    "range": [
      279,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 364,
    "end": 368,
    "range": [
      364,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  }
]
```
