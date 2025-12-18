__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 42,
        "end": 45
      },
      "const": false,
      "declare": false,
      "start": 32,
      "end": 45
    },
    {
      "type": "EmptyStatement",
      "start": 45,
      "end": 46
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "initializer": null,
            "computed": false,
            "start": 60,
            "end": 61
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "initializer": null,
            "computed": false,
            "start": 63,
            "end": 64
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 66,
              "end": 68
            },
            "initializer": null,
            "computed": false,
            "start": 66,
            "end": 68
          }
        ],
        "start": 58,
        "end": 70
      },
      "const": false,
      "declare": false,
      "start": 47,
      "end": 70
    },
    {
      "type": "EmptyStatement",
      "start": 70,
      "end": 71
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
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 106
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 118
            },
            "prefix": true,
            "start": 109,
            "end": 118
          },
          "definite": false,
          "start": 94,
          "end": 118
        }
      ],
      "declare": false,
      "start": 90,
      "end": 119
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
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 136
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 149
            },
            "prefix": true,
            "start": 139,
            "end": 149
          },
          "definite": false,
          "start": 124,
          "end": 149
        }
      ],
      "declare": false,
      "start": 120,
      "end": 150
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
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 193
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 206
              },
              "property": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 207,
                "end": 210
              },
              "optional": false,
              "computed": true,
              "start": 201,
              "end": 211
            },
            "prefix": true,
            "start": 196,
            "end": 211
          },
          "definite": false,
          "start": 181,
          "end": 211
        }
      ],
      "declare": false,
      "start": 177,
      "end": 212
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
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 229
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 242
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 243,
                  "end": 244
                },
                "optional": false,
                "computed": true,
                "start": 238,
                "end": 245
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 253
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 254,
                  "end": 257
                },
                "optional": false,
                "computed": true,
                "start": 248,
                "end": 258
              },
              "start": 238,
              "end": 258
            },
            "prefix": true,
            "start": 232,
            "end": 259
          },
          "definite": false,
          "start": 217,
          "end": 259
        }
      ],
      "declare": false,
      "start": 213,
      "end": 260
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
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 306
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 323
              },
              "prefix": true,
              "start": 314,
              "end": 323
            },
            "prefix": true,
            "start": 309,
            "end": 323
          },
          "definite": false,
          "start": 294,
          "end": 323
        }
      ],
      "declare": false,
      "start": 290,
      "end": 324
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
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 341
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 360,
                      "end": 364
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 365,
                      "end": 366
                    },
                    "optional": false,
                    "computed": true,
                    "start": 360,
                    "end": 367
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 370,
                      "end": 375
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 377
                    },
                    "optional": false,
                    "computed": false,
                    "start": 370,
                    "end": 377
                  },
                  "start": 360,
                  "end": 377
                },
                "prefix": true,
                "start": 354,
                "end": 378
              },
              "prefix": true,
              "start": 349,
              "end": 378
            },
            "prefix": true,
            "start": 344,
            "end": 378
          },
          "definite": false,
          "start": 329,
          "end": 378
        }
      ],
      "declare": false,
      "start": 325,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 419
        },
        "prefix": true,
        "start": 410,
        "end": 419
      },
      "directive": null,
      "start": 410,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 431
        },
        "prefix": true,
        "start": 421,
        "end": 431
      },
      "directive": null,
      "start": 421,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 443
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 444,
            "end": 447
          },
          "optional": false,
          "computed": true,
          "start": 438,
          "end": 448
        },
        "prefix": true,
        "start": 433,
        "end": 448
      },
      "directive": null,
      "start": 433,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 459
            },
            "prefix": true,
            "start": 450,
            "end": 459
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 461,
            "end": 466
          }
        ],
        "start": 450,
        "end": 466
      },
      "directive": null,
      "start": 450,
      "end": 467
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 32,
  "end": 467
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 32,
    "end": 36,
    "range": [
      32,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 47,
    "end": 51,
    "range": [
      47,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 52,
    "end": 57,
    "range": [
      52,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 66,
    "end": 68,
    "range": [
      66,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93,
    "range": [
      90,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny1",
    "start": 94,
    "end": 106,
    "range": [
      94,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 114,
    "end": 118,
    "range": [
      114,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123,
    "range": [
      120,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny2",
    "start": 124,
    "end": 136,
    "range": [
      124,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 139,
    "end": 143,
    "range": [
      139,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 144,
    "end": 149,
    "range": [
      144,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180,
    "range": [
      177,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny3",
    "start": 181,
    "end": 193,
    "range": [
      181,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 196,
    "end": 200,
    "range": [
      196,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 201,
    "end": 206,
    "range": [
      201,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 213,
    "end": 216,
    "range": [
      213,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny4",
    "start": 217,
    "end": 229,
    "range": [
      217,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 232,
    "end": 236,
    "range": [
      232,
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
    "value": "ENUM",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 248,
    "end": 253,
    "range": [
      248,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 254,
    "end": 257,
    "range": [
      254,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny5",
    "start": 294,
    "end": 306,
    "range": [
      294,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 309,
    "end": 313,
    "range": [
      309,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 314,
    "end": 318,
    "range": [
      314,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 319,
    "end": 323,
    "range": [
      319,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328,
    "range": [
      325,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny6",
    "start": 329,
    "end": 341,
    "range": [
      329,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 344,
    "end": 348,
    "range": [
      344,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 349,
    "end": 353,
    "range": [
      349,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 354,
    "end": 358,
    "range": [
      354,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 360,
    "end": 364,
    "range": [
      360,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 370,
    "end": 375,
    "range": [
      370,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 410,
    "end": 414,
    "range": [
      410,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 415,
    "end": 419,
    "range": [
      415,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 421,
    "end": 425,
    "range": [
      421,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 426,
    "end": 431,
    "range": [
      426,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 433,
    "end": 437,
    "range": [
      433,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 438,
    "end": 443,
    "range": [
      438,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 444,
    "end": 447,
    "range": [
      444,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 450,
    "end": 454,
    "range": [
      450,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 455,
    "end": 459,
    "range": [
      455,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  }
]
```
