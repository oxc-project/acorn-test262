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
            "name": "fooOrBar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 14,
                      "end": 19
                    },
                    "start": 14,
                    "end": 19
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 22,
                      "end": 27
                    },
                    "start": 22,
                    "end": 27
                  }
                ],
                "start": 14,
                "end": 27
              },
              "start": 12,
              "end": 27
            },
            "start": 4,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 38,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 47,
                "end": 52
              },
              "start": 47,
              "end": 52
            },
            "start": 38,
            "end": 52
          },
          "definite": false,
          "start": 34,
          "end": 52
        }
      ],
      "declare": false,
      "start": 30,
      "end": 53
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 62,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 71,
                "end": 76
              },
              "start": 71,
              "end": 76
            },
            "start": 62,
            "end": 76
          },
          "definite": false,
          "start": 58,
          "end": 76
        }
      ],
      "declare": false,
      "start": 54,
      "end": 77
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 98,
                "end": 103
              },
              "start": 98,
              "end": 103
            },
            "start": 86,
            "end": 103
          },
          "definite": false,
          "start": 82,
          "end": 103
        }
      ],
      "declare": false,
      "start": 78,
      "end": 104
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 110
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 125,
                "end": 130
              },
              "start": 125,
              "end": 130
            },
            "start": 113,
            "end": 130
          },
          "definite": false,
          "start": 109,
          "end": 130
        }
      ],
      "declare": false,
      "start": 105,
      "end": 131
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 152,
                "end": 157
              },
              "start": 152,
              "end": 157
            },
            "start": 140,
            "end": 157
          },
          "definite": false,
          "start": 136,
          "end": 157
        }
      ],
      "declare": false,
      "start": 132,
      "end": 158
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 164
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 167,
              "end": 172
            },
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooOrBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 191
              },
              "typeArguments": null,
              "start": 176,
              "end": 191
            },
            "start": 167,
            "end": 191
          },
          "definite": false,
          "start": 163,
          "end": 191
        }
      ],
      "declare": false,
      "start": 159,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
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
    "value": "fooOrBar",
    "start": 4,
    "end": 12,
    "range": [
      4,
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
    "type": "String",
    "value": "\"foo\"",
    "start": 14,
    "end": 19,
    "range": [
      14,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 22,
    "end": 27,
    "range": [
      22,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 30,
    "end": 33,
    "range": [
      30,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 38,
    "end": 43,
    "range": [
      38,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 44,
    "end": 46,
    "range": [
      44,
      46
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 47,
    "end": 52,
    "range": [
      47,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 54,
    "end": 57,
    "range": [
      54,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 62,
    "end": 67,
    "range": [
      62,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 68,
    "end": 70,
    "range": [
      68,
      70
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 71,
    "end": 76,
    "range": [
      71,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 78,
    "end": 81,
    "range": [
      78,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 86,
    "end": 94,
    "range": [
      86,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 95,
    "end": 97,
    "range": [
      95,
      97
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 98,
    "end": 103,
    "range": [
      98,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 113,
    "end": 121,
    "range": [
      113,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 122,
    "end": 124,
    "range": [
      122,
      124
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
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
    "type": "Keyword",
    "value": "let",
    "start": 132,
    "end": 135,
    "range": [
      132,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 140,
    "end": 148,
    "range": [
      140,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 152,
    "end": 157,
    "range": [
      152,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 167,
    "end": 172,
    "range": [
      167,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 173,
    "end": 175,
    "range": [
      173,
      175
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 183,
    "end": 191,
    "range": [
      183,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  }
]
```
