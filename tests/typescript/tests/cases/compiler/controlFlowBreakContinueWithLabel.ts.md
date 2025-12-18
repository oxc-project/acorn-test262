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
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 12,
              "end": 13
            },
            "initializer": null,
            "computed": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "initializer": null,
            "computed": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 10,
        "end": 18
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 18
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
            "name": "user",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "User",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 34
                },
                "typeArguments": null,
                "start": 30,
                "end": 34
              },
              "start": 28,
              "end": 34
            },
            "start": 24,
            "end": 34
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "User",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 41
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "optional": false,
            "computed": false,
            "start": 37,
            "end": 43
          },
          "definite": false,
          "start": 24,
          "end": 43
        }
      ],
      "declare": false,
      "start": 20,
      "end": 43
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 50
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 59,
          "end": 63
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "SwitchStatement",
              "discriminant": {
                "type": "Identifier",
                "decorators": [],
                "name": "user",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 83
              },
              "cases": [
                {
                  "type": "SwitchCase",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "User",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 104
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 106
                    },
                    "optional": false,
                    "computed": false,
                    "start": 100,
                    "end": 106
                  },
                  "consequent": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "user",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 120,
                          "end": 124
                        },
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "User",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 127,
                            "end": 131
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 132,
                            "end": 133
                          },
                          "optional": false,
                          "computed": false,
                          "start": 127,
                          "end": 133
                        },
                        "start": 120,
                        "end": 133
                      },
                      "directive": null,
                      "start": 120,
                      "end": 134
                    },
                    {
                      "type": "ContinueStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 156,
                        "end": 161
                      },
                      "start": 147,
                      "end": 162
                    }
                  ],
                  "start": 95,
                  "end": 162
                },
                {
                  "type": "SwitchCase",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "User",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 180
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 182
                    },
                    "optional": false,
                    "computed": false,
                    "start": 176,
                    "end": 182
                  },
                  "consequent": [
                    {
                      "type": "BreakStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 207
                      },
                      "start": 196,
                      "end": 208
                    }
                  ],
                  "start": 171,
                  "end": 208
                }
              ],
              "start": 71,
              "end": 214
            }
          ],
          "start": 65,
          "end": 216
        },
        "start": 52,
        "end": 216
      },
      "start": 45,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "user",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 221
      },
      "directive": null,
      "start": 217,
      "end": 222
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 222
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 5,
    "end": 9,
    "range": [
      5,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 20,
    "end": 23,
    "range": [
      20,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 24,
    "end": 28,
    "range": [
      24,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 30,
    "end": 34,
    "range": [
      30,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 45,
    "end": 50,
    "range": [
      45,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 52,
    "end": 57,
    "range": [
      52,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 59,
    "end": 63,
    "range": [
      59,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 95,
    "end": 99,
    "range": [
      95,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 100,
    "end": 104,
    "range": [
      100,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 120,
    "end": 124,
    "range": [
      120,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "continue",
    "start": 147,
    "end": 155,
    "range": [
      147,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 156,
    "end": 161,
    "range": [
      156,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 171,
    "end": 175,
    "range": [
      171,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 176,
    "end": 180,
    "range": [
      176,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 196,
    "end": 201,
    "range": [
      196,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 202,
    "end": 207,
    "range": [
      202,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 217,
    "end": 221,
    "range": [
      217,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  }
]
```
