__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 42
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  ],
                  "start": 42,
                  "end": 50
                },
                "start": 29,
                "end": 50
              },
              "start": 27,
              "end": 50
            },
            "start": 14,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 84
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    }
                  ],
                  "start": 84,
                  "end": 92
                },
                "start": 76,
                "end": 92
              },
              "start": 74,
              "end": 92
            },
            "start": 66,
            "end": 92
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 92
        }
      ],
      "declare": true,
      "start": 52,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 110
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
                    },
                    "start": 124,
                    "end": 132
                  },
                  "start": 123,
                  "end": 132
                },
                "init": null,
                "definite": false,
                "start": 123,
                "end": 132
              }
            ],
            "declare": false,
            "start": 119,
            "end": 133
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
                      "type": "TSStringKeyword",
                      "start": 145,
                      "end": 151
                    },
                    "start": 143,
                    "end": 151
                  },
                  "start": 142,
                  "end": 151
                },
                "init": null,
                "definite": false,
                "start": 142,
                "end": 151
              }
            ],
            "declare": false,
            "start": 138,
            "end": 152
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "init": null,
                  "definite": false,
                  "start": 174,
                  "end": 175
                }
              ],
              "declare": false,
              "start": 168,
              "end": 175
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 179,
              "end": 181
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 183,
              "end": 190
            },
            "start": 157,
            "end": 190
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 211,
              "end": 213
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 215,
              "end": 222
            },
            "start": 195,
            "end": 222
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 256
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 258,
              "end": 265
            },
            "start": 227,
            "end": 265
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 282
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 294
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 296,
              "end": 303
            },
            "start": 270,
            "end": 303
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 320
                  },
                  "init": null,
                  "definite": false,
                  "start": 319,
                  "end": 320
                }
              ],
              "declare": false,
              "start": 313,
              "end": 320
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 337
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 339,
              "end": 346
            },
            "start": 308,
            "end": 346
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 374
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 376,
              "end": 383
            },
            "start": 351,
            "end": 383
          }
        ],
        "start": 113,
        "end": 385
      },
      "expression": false,
      "start": 94,
      "end": 385
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 385
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 14,
    "end": 27,
    "range": [
      14,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 29,
    "end": 42,
    "range": [
      29,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65,
    "range": [
      60,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 66,
    "end": 74,
    "range": [
      66,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 76,
    "end": 84,
    "range": [
      76,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108,
    "range": [
      100,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 119,
    "end": 122,
    "range": [
      119,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132,
    "range": [
      126,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 145,
    "end": 151,
    "range": [
      145,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 161,
    "end": 166,
    "range": [
      161,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 168,
    "end": 173,
    "range": [
      168,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 176,
    "end": 178,
    "range": [
      176,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 195,
    "end": 198,
    "range": [
      195,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 199,
    "end": 204,
    "range": [
      199,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 208,
    "end": 210,
    "range": [
      208,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 231,
    "end": 236,
    "range": [
      231,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 240,
    "end": 242,
    "range": [
      240,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 243,
    "end": 256,
    "range": [
      243,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 270,
    "end": 273,
    "range": [
      270,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 274,
    "end": 279,
    "range": [
      274,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 283,
    "end": 285,
    "range": [
      283,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 286,
    "end": 294,
    "range": [
      286,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 308,
    "end": 311,
    "range": [
      308,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 313,
    "end": 318,
    "range": [
      313,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 321,
    "end": 323,
    "range": [
      321,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 324,
    "end": 337,
    "range": [
      324,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 351,
    "end": 354,
    "range": [
      351,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 358,
    "end": 360,
    "range": [
      358,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "asyncIterable",
    "start": 361,
    "end": 374,
    "range": [
      361,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  }
]
```
