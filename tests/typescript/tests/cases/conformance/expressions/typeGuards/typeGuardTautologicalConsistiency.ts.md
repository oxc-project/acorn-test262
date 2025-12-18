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
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 20,
                    "end": 26
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  }
                ],
                "start": 20,
                "end": 35
              },
              "start": 18,
              "end": 35
            },
            "start": 4,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 35
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 63
          },
          "prefix": true,
          "start": 42,
          "end": 63
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 68,
          "end": 76
        },
        "start": 42,
        "end": 76
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stringOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 109
                },
                "prefix": true,
                "start": 88,
                "end": 109
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 114,
                "end": 122
              },
              "start": 88,
              "end": 122
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 148
                  },
                  "directive": null,
                  "start": 134,
                  "end": 149
                }
              ],
              "start": 124,
              "end": 155
            },
            "alternate": null,
            "start": 84,
            "end": 155
          }
        ],
        "start": 78,
        "end": 157
      },
      "alternate": null,
      "start": 38,
      "end": 157
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 184
            },
            "prefix": true,
            "start": 163,
            "end": 184
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "number",
            "raw": "\"number\"",
            "start": 189,
            "end": 197
          },
          "start": 163,
          "end": 197
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 222
            },
            "prefix": true,
            "start": 201,
            "end": 222
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "number",
            "raw": "\"number\"",
            "start": 227,
            "end": 235
          },
          "start": 201,
          "end": 235
        },
        "start": 163,
        "end": 235
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 257
            },
            "directive": null,
            "start": 243,
            "end": 258
          }
        ],
        "start": 237,
        "end": 260
      },
      "alternate": null,
      "start": 159,
      "end": 260
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 260
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
    "value": "stringOrNumber",
    "start": 4,
    "end": 18,
    "range": [
      4,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26,
    "range": [
      20,
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
    "type": "Identifier",
    "value": "number",
    "start": 29,
    "end": 35,
    "range": [
      29,
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
    "type": "Keyword",
    "value": "if",
    "start": 38,
    "end": 40,
    "range": [
      38,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 49,
    "end": 63,
    "range": [
      49,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 64,
    "end": 67,
    "range": [
      64,
      67
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 68,
    "end": 76,
    "range": [
      68,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 84,
    "end": 86,
    "range": [
      84,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 88,
    "end": 94,
    "range": [
      88,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 95,
    "end": 109,
    "range": [
      95,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 110,
    "end": 113,
    "range": [
      110,
      113
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 114,
    "end": 122,
    "range": [
      114,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 134,
    "end": 148,
    "range": [
      134,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 159,
    "end": 161,
    "range": [
      159,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 170,
    "end": 184,
    "range": [
      170,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 185,
    "end": 188,
    "range": [
      185,
      188
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 189,
    "end": 197,
    "range": [
      189,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 208,
    "end": 222,
    "range": [
      208,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 223,
    "end": 226,
    "range": [
      223,
      226
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 227,
    "end": 235,
    "range": [
      227,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 243,
    "end": 257,
    "range": [
      243,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  }
]
```
