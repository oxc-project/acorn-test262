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
            "name": "ai",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 31
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 32,
                      "end": 38
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 40,
                      "end": 49
                    }
                  ],
                  "start": 31,
                  "end": 50
                },
                "start": 18,
                "end": 50
              },
              "start": 16,
              "end": 50
            },
            "start": 14,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
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
            "name": "aio",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIteratorObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 90
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 99,
                      "end": 108
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 110,
                      "end": 117
                    }
                  ],
                  "start": 90,
                  "end": 118
                },
                "start": 71,
                "end": 118
              },
              "start": 69,
              "end": 118
            },
            "start": 66,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 118
        }
      ],
      "declare": true,
      "start": 52,
      "end": 119
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
            "name": "ag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 152
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 161,
                      "end": 165
                    }
                  ],
                  "start": 152,
                  "end": 166
                },
                "start": 138,
                "end": 166
              },
              "start": 136,
              "end": 166
            },
            "start": 134,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 166
        }
      ],
      "declare": true,
      "start": 120,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 185
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 228
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aio",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "definite": false,
                "start": 225,
                "end": 234
              }
            ],
            "declare": false,
            "start": 213,
            "end": 235
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 255
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 260
                },
                "definite": false,
                "start": 252,
                "end": 260
              }
            ],
            "declare": false,
            "start": 240,
            "end": 261
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 301
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ai",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "definite": false,
                "start": 298,
                "end": 306
              }
            ],
            "declare": false,
            "start": 286,
            "end": 307
          }
        ],
        "start": 188,
        "end": 309
      },
      "expression": false,
      "start": 169,
      "end": 309
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 309
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
    "value": "ai",
    "start": 14,
    "end": 16,
    "range": [
      14,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 18,
    "end": 31,
    "range": [
      18,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 40,
    "end": 49,
    "range": [
      40,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65,
    "range": [
      60,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "aio",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncIteratorObject",
    "start": 71,
    "end": 90,
    "range": [
      71,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
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
    "value": ",",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 99,
    "end": 108,
    "range": [
      99,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 110,
    "end": 117,
    "range": [
      110,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 120,
    "end": 127,
    "range": [
      120,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "ag",
    "start": 134,
    "end": 136,
    "range": [
      134,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 138,
    "end": 152,
    "range": [
      138,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 161,
    "end": 165,
    "range": [
      161,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 175,
    "end": 183,
    "range": [
      175,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 213,
    "end": 218,
    "range": [
      213,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "it0",
    "start": 225,
    "end": 228,
    "range": [
      225,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "aio",
    "start": 231,
    "end": 234,
    "range": [
      231,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 240,
    "end": 245,
    "range": [
      240,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 246,
    "end": 251,
    "range": [
      246,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "it1",
    "start": 252,
    "end": 255,
    "range": [
      252,
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
    "value": "ag",
    "start": 258,
    "end": 260,
    "range": [
      258,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 286,
    "end": 291,
    "range": [
      286,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 292,
    "end": 297,
    "range": [
      292,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "it2",
    "start": 298,
    "end": 301,
    "range": [
      298,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "ai",
    "start": 304,
    "end": 306,
    "range": [
      304,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  }
]
```
