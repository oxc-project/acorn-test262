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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 11,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 42
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 54
          },
          "definite": false,
          "start": 40,
          "end": 54
        }
      ],
      "declare": false,
      "start": 34,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [],
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 79
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 84,
            "end": 85
          },
          "id": null,
          "generator": false,
          "start": 76,
          "end": 85
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 87,
            "end": 89
          }
        ],
        "optional": false,
        "start": 75,
        "end": 90
      },
      "directive": null,
      "start": 75,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [],
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 115
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 120,
            "end": 121
          },
          "id": null,
          "generator": false,
          "start": 112,
          "end": 121
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 132
          }
        ],
        "optional": false,
        "start": 111,
        "end": 133
      },
      "directive": null,
      "start": 111,
      "end": 134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 172,
              "end": 181
            },
            "start": 170,
            "end": 181
          },
          "start": 168,
          "end": 181
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 196,
              "end": 197
            },
            "start": 189,
            "end": 197
          }
        ],
        "start": 183,
        "end": 199
      },
      "expression": false,
      "start": 155,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 212
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 217,
              "end": 219
            },
            "start": 215,
            "end": 219
          },
          "start": 213,
          "end": 219
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 234,
              "end": 235
            },
            "start": 227,
            "end": 235
          }
        ],
        "start": 221,
        "end": 237
      },
      "expression": false,
      "start": 200,
      "end": 237
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 250,
                "end": 259
              },
              "start": 248,
              "end": 259
            },
            "start": 245,
            "end": 259
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 262,
            "end": 263
          },
          "definite": false,
          "start": 245,
          "end": 263
        }
      ],
      "declare": false,
      "start": 239,
      "end": 263
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 275,
                "end": 277
              },
              "start": 273,
              "end": 277
            },
            "start": 271,
            "end": 277
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 280,
            "end": 282
          },
          "definite": false,
          "start": 271,
          "end": 282
        }
      ],
      "declare": false,
      "start": 265,
      "end": 282
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 282
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
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
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 34,
    "end": 39,
    "range": [
      34,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 45,
    "end": 54,
    "range": [
      45,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 81,
    "end": 83,
    "range": [
      81,
      83
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
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
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
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
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 117,
    "end": 119,
    "range": [
      117,
      119
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 123,
    "end": 132,
    "range": [
      123,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
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
    "value": "function",
    "start": 155,
    "end": 163,
    "range": [
      155,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
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
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 172,
    "end": 181,
    "range": [
      172,
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
    "type": "Keyword",
    "value": "return",
    "start": 189,
    "end": 195,
    "range": [
      189,
      195
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 200,
    "end": 208,
    "range": [
      200,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 209,
    "end": 212,
    "range": [
      209,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 227,
    "end": 233,
    "range": [
      227,
      233
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 239,
    "end": 244,
    "range": [
      239,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 250,
    "end": 259,
    "range": [
      250,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 265,
    "end": 270,
    "range": [
      265,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  }
]
```
