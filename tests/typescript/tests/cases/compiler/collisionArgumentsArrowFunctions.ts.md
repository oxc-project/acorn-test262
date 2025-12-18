__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 13,
                    "end": 19
                  },
                  "start": 11,
                  "end": 19
                },
                "start": 10,
                "end": 19
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 33
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 21,
                "end": 33
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 80,
                              "end": 83
                            },
                            "start": 80,
                            "end": 85
                          },
                          "start": 78,
                          "end": 85
                        },
                        "start": 69,
                        "end": 85
                      },
                      "init": null,
                      "definite": false,
                      "start": 69,
                      "end": 85
                    }
                  ],
                  "declare": false,
                  "start": 65,
                  "end": 86
                }
              ],
              "start": 38,
              "end": 100
            },
            "id": null,
            "generator": false,
            "start": 9,
            "end": 100
          },
          "definite": false,
          "start": 4,
          "end": 100
        }
      ],
      "declare": false,
      "start": 0,
      "end": 100
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 108
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 123,
                    "end": 129
                  },
                  "start": 121,
                  "end": 129
                },
                "start": 112,
                "end": 129
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 138
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 131,
                "end": 138
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 183
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 186,
                        "end": 188
                      },
                      "definite": false,
                      "start": 174,
                      "end": 188
                    }
                  ],
                  "declare": false,
                  "start": 170,
                  "end": 189
                }
              ],
              "start": 143,
              "end": 203
            },
            "id": null,
            "generator": false,
            "start": 111,
            "end": 203
          },
          "definite": false,
          "start": 105,
          "end": 203
        }
      ],
      "declare": false,
      "start": 101,
      "end": 203
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
            "name": "f1NoError",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 217
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 232,
                    "end": 238
                  },
                  "start": 230,
                  "end": 238
                },
                "start": 221,
                "end": 238
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 274
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 277,
                        "end": 279
                      },
                      "definite": false,
                      "start": 265,
                      "end": 279
                    }
                  ],
                  "declare": false,
                  "start": 261,
                  "end": 280
                }
              ],
              "start": 243,
              "end": 294
            },
            "id": null,
            "generator": false,
            "start": 220,
            "end": 294
          },
          "definite": false,
          "start": 208,
          "end": 294
        }
      ],
      "declare": false,
      "start": 204,
      "end": 294
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 302
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 323
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 306,
                "end": 323
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 347
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 350,
                        "end": 352
                      },
                      "definite": false,
                      "start": 338,
                      "end": 352
                    }
                  ],
                  "declare": false,
                  "start": 334,
                  "end": 353
                }
              ],
              "start": 328,
              "end": 367
            },
            "id": null,
            "generator": false,
            "start": 305,
            "end": 367
          },
          "definite": false,
          "start": 300,
          "end": 367
        }
      ],
      "declare": false,
      "start": 296,
      "end": 367
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
            "name": "f2NoError",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 381
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 409
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 412,
                        "end": 414
                      },
                      "definite": false,
                      "start": 400,
                      "end": 414
                    }
                  ],
                  "declare": false,
                  "start": 396,
                  "end": 415
                }
              ],
              "start": 390,
              "end": 429
            },
            "id": null,
            "generator": false,
            "start": 384,
            "end": 429
          },
          "definite": false,
          "start": 372,
          "end": 429
        }
      ],
      "declare": false,
      "start": 368,
      "end": 429
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 429
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4,
    "end": 6,
    "range": [
      4,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13,
    "end": 19,
    "range": [
      13,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 21,
    "end": 24,
    "range": [
      21,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 24,
    "end": 33,
    "range": [
      24,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 35,
    "end": 37,
    "range": [
      35,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 65,
    "end": 68,
    "range": [
      65,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 69,
    "end": 78,
    "range": [
      69,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 80,
    "end": 83,
    "range": [
      80,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 101,
    "end": 104,
    "range": [
      101,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 112,
    "end": 121,
    "range": [
      112,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 123,
    "end": 129,
    "range": [
      123,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 131,
    "end": 134,
    "range": [
      131,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 174,
    "end": 183,
    "range": [
      174,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 186,
    "end": 188,
    "range": [
      186,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "f1NoError",
    "start": 208,
    "end": 217,
    "range": [
      208,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 221,
    "end": 230,
    "range": [
      221,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 232,
    "end": 238,
    "range": [
      232,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 240,
    "end": 242,
    "range": [
      240,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 261,
    "end": 264,
    "range": [
      261,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 265,
    "end": 274,
    "range": [
      265,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 277,
    "end": 279,
    "range": [
      277,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 296,
    "end": 299,
    "range": [
      296,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 300,
    "end": 302,
    "range": [
      300,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 306,
    "end": 309,
    "range": [
      306,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 309,
    "end": 323,
    "range": [
      309,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 325,
    "end": 327,
    "range": [
      325,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 334,
    "end": 337,
    "range": [
      334,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 338,
    "end": 347,
    "range": [
      338,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 350,
    "end": 352,
    "range": [
      350,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 368,
    "end": 371,
    "range": [
      368,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "f2NoError",
    "start": 372,
    "end": 381,
    "range": [
      372,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 387,
    "end": 389,
    "range": [
      387,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 400,
    "end": 409,
    "range": [
      400,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 412,
    "end": 414,
    "range": [
      412,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  }
]
```
