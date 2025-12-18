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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 126,
                    "end": 132
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 135,
                    "end": 142
                  }
                ],
                "start": 126,
                "end": 142
              },
              "start": 124,
              "end": 142
            },
            "start": 116,
            "end": 142
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 142
        }
      ],
      "declare": false,
      "start": 112,
      "end": 143
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 158,
                    "end": 165
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 168,
                    "end": 174
                  }
                ],
                "start": 158,
                "end": 174
              },
              "start": 156,
              "end": 174
            },
            "start": 148,
            "end": 174
          },
          "init": null,
          "definite": false,
          "start": 148,
          "end": 174
        }
      ],
      "declare": false,
      "start": 144,
      "end": 175
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 190,
                    "end": 197
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 200,
                    "end": 206
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 209,
                    "end": 216
                  }
                ],
                "start": 190,
                "end": 216
              },
              "start": 188,
              "end": 216
            },
            "start": 180,
            "end": 216
          },
          "init": null,
          "definite": false,
          "start": 180,
          "end": 216
        }
      ],
      "declare": false,
      "start": 176,
      "end": 217
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 232,
                "end": 238
              },
              "start": 230,
              "end": 238
            },
            "start": 222,
            "end": 238
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 238
        }
      ],
      "declare": false,
      "start": 218,
      "end": 239
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 263,
                "end": 270
              },
              "start": 261,
              "end": 270
            },
            "start": 253,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 253,
          "end": 270
        }
      ],
      "declare": false,
      "start": 249,
      "end": 271
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 295,
                "end": 301
              },
              "start": 293,
              "end": 301
            },
            "start": 285,
            "end": 301
          },
          "init": null,
          "definite": false,
          "start": 285,
          "end": 301
        }
      ],
      "declare": false,
      "start": 281,
      "end": 302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 112,
  "end": 311
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115,
    "range": [
      112,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 116,
    "end": 124,
    "range": [
      116,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 126,
    "end": 132,
    "range": [
      126,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 135,
    "end": 142,
    "range": [
      135,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 144,
    "end": 147,
    "range": [
      144,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 148,
    "end": 156,
    "range": [
      148,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 158,
    "end": 165,
    "range": [
      158,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179,
    "range": [
      176,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 180,
    "end": 188,
    "range": [
      180,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 190,
    "end": 197,
    "range": [
      190,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 218,
    "end": 221,
    "range": [
      218,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 222,
    "end": 230,
    "range": [
      222,
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
    "value": "string",
    "start": 232,
    "end": 238,
    "range": [
      232,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 249,
    "end": 252,
    "range": [
      249,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 253,
    "end": 261,
    "range": [
      253,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 263,
    "end": 270,
    "range": [
      263,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284,
    "range": [
      281,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 285,
    "end": 293,
    "range": [
      285,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 295,
    "end": 301,
    "range": [
      295,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  }
]
```
