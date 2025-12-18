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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 20
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 23,
            "end": 28
          },
          "definite": false,
          "start": 18,
          "end": 28
        }
      ],
      "declare": false,
      "start": 12,
      "end": 29
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "start": 36,
            "end": 46
          },
          "init": {
            "type": "Literal",
            "value": 23,
            "raw": "23",
            "start": 49,
            "end": 51
          },
          "definite": false,
          "start": 36,
          "end": 51
        }
      ],
      "declare": false,
      "start": 30,
      "end": 52
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 61
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 64,
            "end": 65
          },
          "definite": false,
          "start": 59,
          "end": 65
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              },
              "start": 70,
              "end": 77
            },
            "start": 67,
            "end": 77
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 80,
            "end": 82
          },
          "definite": false,
          "start": 67,
          "end": 82
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 86
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 89,
            "end": 93
          },
          "definite": false,
          "start": 84,
          "end": 93
        }
      ],
      "declare": false,
      "start": 53,
      "end": 94
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 109
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 112,
              "end": 113
            },
            "definite": false,
            "start": 107,
            "end": 113
          }
        ],
        "declare": false,
        "start": 101,
        "end": 113
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c4",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 117
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 9,
          "raw": "9",
          "start": 120,
          "end": 121
        },
        "start": 115,
        "end": 121
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 127,
            "end": 133
          }
        ],
        "start": 125,
        "end": 135
      },
      "start": 97,
      "end": 135
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 150
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 153,
              "end": 154
            },
            "definite": false,
            "start": 148,
            "end": 154
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c6",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 158
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 161,
              "end": 162
            },
            "definite": false,
            "start": 156,
            "end": 162
          }
        ],
        "declare": false,
        "start": 142,
        "end": 162
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 166
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c6",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 171
        },
        "start": 164,
        "end": 171
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 177,
            "end": 183
          }
        ],
        "start": 175,
        "end": 185
      },
      "start": 138,
      "end": 185
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 185
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 12,
    "end": 17,
    "range": [
      12,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 18,
    "end": 20,
    "range": [
      18,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 23,
    "end": 28,
    "range": [
      23,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35,
    "range": [
      30,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 36,
    "end": 38,
    "range": [
      36,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Numeric",
    "value": "23",
    "start": 49,
    "end": 51,
    "range": [
      49,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 53,
    "end": 58,
    "range": [
      53,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 59,
    "end": 61,
    "range": [
      59,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 80,
    "end": 82,
    "range": [
      80,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 84,
    "end": 86,
    "range": [
      84,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 89,
    "end": 93,
    "range": [
      89,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 101,
    "end": 106,
    "range": [
      101,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 107,
    "end": 109,
    "range": [
      107,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 112,
    "end": 113,
    "range": [
      112,
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
    "type": "Identifier",
    "value": "c4",
    "start": 115,
    "end": 117,
    "range": [
      115,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 127,
    "end": 132,
    "range": [
      127,
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
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 148,
    "end": 150,
    "range": [
      148,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 156,
    "end": 158,
    "range": [
      156,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 164,
    "end": 166,
    "range": [
      164,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 169,
    "end": 171,
    "range": [
      169,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 177,
    "end": 182,
    "range": [
      177,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  }
]
```
