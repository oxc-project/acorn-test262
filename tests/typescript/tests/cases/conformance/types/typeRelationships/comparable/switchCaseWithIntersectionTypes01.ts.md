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
            "name": "strAndNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                ],
                "start": 15,
                "end": 30
              },
              "start": 13,
              "end": 30
            },
            "start": 4,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
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
            "name": "numAndBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 57,
                    "end": 64
                  }
                ],
                "start": 48,
                "end": 64
              },
              "start": 46,
              "end": 64
            },
            "start": 36,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 64
        }
      ],
      "declare": false,
      "start": 32,
      "end": 65
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "start": 70,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 70,
          "end": 81
        }
      ],
      "declare": false,
      "start": 66,
      "end": 82
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "start": 87,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 87,
          "end": 98
        }
      ],
      "declare": false,
      "start": 83,
      "end": 99
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
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 110,
                "end": 117
              },
              "start": 108,
              "end": 117
            },
            "start": 104,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 104,
          "end": 117
        }
      ],
      "declare": false,
      "start": 100,
      "end": 118
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "strAndNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 137
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "strAndNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 176
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 186,
              "end": 192
            }
          ],
          "start": 162,
          "end": 192
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 226
          },
          "consequent": [],
          "start": 218,
          "end": 227
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 240
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 250,
              "end": 256
            }
          ],
          "start": 232,
          "end": 256
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "numAndBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 308
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 318,
              "end": 324
            }
          ],
          "start": 293,
          "end": 324
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 358
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 368,
              "end": 374
            }
          ],
          "start": 349,
          "end": 374
        }
      ],
      "start": 120,
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
    "value": "strAndNum",
    "start": 4,
    "end": 13,
    "range": [
      4,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35,
    "range": [
      32,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "numAndBool",
    "start": 36,
    "end": 46,
    "range": [
      36,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 70,
    "end": 73,
    "range": [
      70,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 100,
    "end": 103,
    "range": [
      100,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 110,
    "end": 117,
    "range": [
      110,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 120,
    "end": 126,
    "range": [
      120,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "strAndNum",
    "start": 128,
    "end": 137,
    "range": [
      128,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 162,
    "end": 166,
    "range": [
      162,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "strAndNum",
    "start": 167,
    "end": 176,
    "range": [
      167,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 186,
    "end": 191,
    "range": [
      186,
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
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 218,
    "end": 222,
    "range": [
      218,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 223,
    "end": 226,
    "range": [
      223,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 232,
    "end": 236,
    "range": [
      232,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 237,
    "end": 240,
    "range": [
      237,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 250,
    "end": 255,
    "range": [
      250,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 293,
    "end": 297,
    "range": [
      293,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "numAndBool",
    "start": 298,
    "end": 308,
    "range": [
      298,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 318,
    "end": 323,
    "range": [
      318,
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
    "value": "case",
    "start": 349,
    "end": 353,
    "range": [
      349,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 354,
    "end": 358,
    "range": [
      354,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 368,
    "end": 373,
    "range": [
      368,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  }
]
```
