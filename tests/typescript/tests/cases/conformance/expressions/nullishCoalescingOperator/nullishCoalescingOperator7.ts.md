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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 26,
                    "end": 35
                  }
                ],
                "start": 17,
                "end": 35
              },
              "start": 15,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
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
            "name": "b",
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
                    "type": "TSUndefinedKeyword",
                    "start": 63,
                    "end": 72
                  }
                ],
                "start": 54,
                "end": 72
              },
              "start": 52,
              "end": 72
            },
            "start": 51,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 72
        }
      ],
      "declare": true,
      "start": 37,
      "end": 73
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 91,
                    "end": 97
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 100,
                    "end": 109
                  }
                ],
                "start": 91,
                "end": 109
              },
              "start": 89,
              "end": 109
            },
            "start": 88,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 109
        }
      ],
      "declare": true,
      "start": 74,
      "end": 110
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
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 122
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "consequent": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 129,
              "end": 130
            },
            "alternate": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 133,
              "end": 134
            },
            "start": 125,
            "end": 134
          },
          "definite": false,
          "start": 118,
          "end": 134
        }
      ],
      "declare": false,
      "start": 112,
      "end": 135
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 146
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 154,
                "end": 159
              },
              "start": 149,
              "end": 159
            },
            "consequent": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 162,
              "end": 163
            },
            "alternate": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 166,
              "end": 167
            },
            "start": 149,
            "end": 167
          },
          "definite": false,
          "start": 142,
          "end": 167
        }
      ],
      "declare": false,
      "start": 136,
      "end": 168
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 179
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 183
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 187,
                "end": 192
              },
              "start": 182,
              "end": 192
            },
            "consequent": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 201,
                "end": 206
              },
              "start": 196,
              "end": 206
            },
            "alternate": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "baz",
                "raw": "'baz'",
                "start": 216,
                "end": 221
              },
              "start": 211,
              "end": 221
            },
            "start": 182,
            "end": 222
          },
          "definite": false,
          "start": 175,
          "end": 222
        }
      ],
      "declare": false,
      "start": 169,
      "end": 223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 235
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "foo4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 255
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 259
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 263,
                      "end": 268
                    },
                    "start": 258,
                    "end": 268
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 272
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 276,
                      "end": 281
                    },
                    "start": 271,
                    "end": 281
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 285
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "'baz'",
                      "start": 289,
                      "end": 294
                    },
                    "start": 284,
                    "end": 294
                  },
                  "start": 258,
                  "end": 294
                },
                "definite": false,
                "start": 251,
                "end": 294
              }
            ],
            "declare": false,
            "start": 245,
            "end": 295
          }
        ],
        "start": 239,
        "end": 297
      },
      "expression": false,
      "start": 225,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
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
    "value": "a",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 26,
    "end": 35,
    "range": [
      26,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44,
    "range": [
      37,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50,
    "range": [
      45,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "undefined",
    "start": 63,
    "end": 72,
    "range": [
      63,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 74,
    "end": 81,
    "range": [
      74,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 100,
    "end": 109,
    "range": [
      100,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 118,
    "end": 122,
    "range": [
      118,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 136,
    "end": 141,
    "range": [
      136,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 151,
    "end": 153,
    "range": [
      151,
      153
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 154,
    "end": 159,
    "range": [
      154,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 175,
    "end": 179,
    "range": [
      175,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 184,
    "end": 186,
    "range": [
      184,
      186
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 187,
    "end": 192,
    "range": [
      187,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 201,
    "end": 206,
    "range": [
      201,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 213,
    "end": 215,
    "range": [
      213,
      215
    ]
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 216,
    "end": 221,
    "range": [
      216,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 225,
    "end": 233,
    "range": [
      225,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 245,
    "end": 250,
    "range": [
      245,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 251,
    "end": 255,
    "range": [
      251,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 260,
    "end": 262,
    "range": [
      260,
      262
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 263,
    "end": 268,
    "range": [
      263,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 273,
    "end": 275,
    "range": [
      273,
      275
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 276,
    "end": 281,
    "range": [
      276,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 286,
    "end": 288,
    "range": [
      286,
      288
    ]
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 289,
    "end": 294,
    "range": [
      289,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  }
]
```
