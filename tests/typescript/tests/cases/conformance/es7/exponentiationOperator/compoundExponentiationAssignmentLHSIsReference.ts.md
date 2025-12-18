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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 11,
                "end": 14
              },
              "start": 9,
              "end": 14
            },
            "start": 4,
            "end": 14
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "start": 60,
            "end": 70
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 70
        }
      ],
      "declare": false,
      "start": 56,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 74
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 84
        },
        "start": 72,
        "end": 84
      },
      "directive": null,
      "start": 72,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 104,
              "end": 110
            },
            "start": 102,
            "end": 110
          },
          "start": 100,
          "end": 110
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 120
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 130
              },
              "start": 118,
              "end": 130
            },
            "directive": null,
            "start": 118,
            "end": 131
          }
        ],
        "start": 112,
        "end": 133
      },
      "expression": false,
      "start": 87,
      "end": 133
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 167
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 169,
                        "end": 175
                      },
                      "start": 167,
                      "end": 175
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 166,
                    "end": 175
                  }
                ],
                "start": 164,
                "end": 177
              },
              "start": 162,
              "end": 177
            },
            "start": 160,
            "end": 177
          },
          "init": null,
          "definite": false,
          "start": 160,
          "end": 177
        }
      ],
      "declare": false,
      "start": 156,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 179,
          "end": 183
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 193
        },
        "start": 179,
        "end": 193
      },
      "directive": null,
      "start": 179,
      "end": 194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 198
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 199,
            "end": 202
          },
          "optional": false,
          "computed": true,
          "start": 196,
          "end": 203
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 213
        },
        "start": 196,
        "end": 213
      },
      "directive": null,
      "start": 196,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 273
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 284
        },
        "start": 270,
        "end": 284
      },
      "directive": null,
      "start": 270,
      "end": 285
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 299
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 304,
              "end": 310
            },
            "start": 302,
            "end": 310
          },
          "start": 300,
          "end": 310
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 321
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 332
              },
              "start": 318,
              "end": 332
            },
            "directive": null,
            "start": 318,
            "end": 333
          }
        ],
        "start": 312,
        "end": 335
      },
      "expression": false,
      "start": 287,
      "end": 335
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 342
          },
          "optional": false,
          "computed": false,
          "start": 338,
          "end": 342
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 353
        },
        "start": 337,
        "end": 353
      },
      "directive": null,
      "start": 337,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 359
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 360,
            "end": 363
          },
          "optional": false,
          "computed": true,
          "start": 357,
          "end": 364
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 375
        },
        "start": 356,
        "end": 375
      },
      "directive": null,
      "start": 356,
      "end": 376
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 376
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
    "value": "value",
    "start": 4,
    "end": 9,
    "range": [
      4,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 11,
    "end": 14,
    "range": [
      11,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 60,
    "end": 62,
    "range": [
      60,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70,
    "range": [
      64,
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
    "type": "Identifier",
    "value": "x1",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 79,
    "end": 84,
    "range": [
      79,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 87,
    "end": 95,
    "range": [
      87,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 96,
    "end": 99,
    "range": [
      96,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 100,
    "end": 102,
    "range": [
      100,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 118,
    "end": 120,
    "range": [
      118,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 121,
    "end": 124,
    "range": [
      121,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 125,
    "end": 130,
    "range": [
      125,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 156,
    "end": 159,
    "range": [
      156,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 160,
    "end": 162,
    "range": [
      160,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 179,
    "end": 181,
    "range": [
      179,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
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
    "value": "**=",
    "start": 184,
    "end": 187,
    "range": [
      184,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 196,
    "end": 198,
    "range": [
      196,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 199,
    "end": 202,
    "range": [
      199,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 208,
    "end": 213,
    "range": [
      208,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 271,
    "end": 273,
    "range": [
      271,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 279,
    "end": 284,
    "range": [
      279,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 287,
    "end": 295,
    "range": [
      287,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 296,
    "end": 299,
    "range": [
      296,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 300,
    "end": 302,
    "range": [
      300,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 304,
    "end": 310,
    "range": [
      304,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 323,
    "end": 326,
    "range": [
      323,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 327,
    "end": 332,
    "range": [
      327,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 338,
    "end": 340,
    "range": [
      338,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 344,
    "end": 347,
    "range": [
      344,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 348,
    "end": 353,
    "range": [
      348,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 357,
    "end": 359,
    "range": [
      357,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 360,
    "end": 363,
    "range": [
      360,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 366,
    "end": 369,
    "range": [
      366,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 370,
    "end": 375,
    "range": [
      370,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  }
]
```
