__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParserFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "eventEmitter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "start": 28,
                "end": 48
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "buffer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 58,
                    "end": 64
                  },
                  "start": 56,
                  "end": 64
                },
                "start": 50,
                "end": 64
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 67,
                "end": 71
              },
              "start": 65,
              "end": 71
            },
            "start": 27,
            "end": 72
          }
        ],
        "start": 21,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parsers",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 92
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 114
                },
                "typeArguments": null,
                "start": 104,
                "end": 114
              },
              "start": 102,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 99,
            "end": 115
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readline",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 128
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "delimiter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 141,
                    "end": 147
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 129,
                "end": 147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 160
                },
                "typeArguments": null,
                "start": 150,
                "end": 160
              },
              "start": 148,
              "end": 160
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 120,
            "end": 161
          }
        ],
        "start": 93,
        "end": 163
      },
      "declare": false,
      "start": 75,
      "end": 163
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
            "name": "parsers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parsers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 184
                },
                "typeArguments": null,
                "start": 177,
                "end": 184
              },
              "start": 175,
              "end": 184
            },
            "start": 168,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 168,
          "end": 184
        }
      ],
      "declare": false,
      "start": 164,
      "end": 185
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 203
                },
                "typeArguments": null,
                "start": 193,
                "end": 203
              },
              "start": 191,
              "end": 203
            },
            "start": 190,
            "end": 203
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "parsers",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 213
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 217
            },
            "optional": false,
            "computed": false,
            "start": 206,
            "end": 217
          },
          "definite": false,
          "start": 190,
          "end": 217
        }
      ],
      "declare": false,
      "start": 186,
      "end": 218
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 243
                },
                "typeArguments": null,
                "start": 233,
                "end": 243
              },
              "start": 231,
              "end": 243
            },
            "start": 230,
            "end": 243
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "parsers",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 253
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readline",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 262
            },
            "optional": false,
            "computed": false,
            "start": 246,
            "end": 262
          },
          "definite": false,
          "start": 230,
          "end": 262
        }
      ],
      "declare": false,
      "start": 226,
      "end": 263
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 291
                },
                "typeArguments": null,
                "start": 281,
                "end": 291
              },
              "start": 279,
              "end": 291
            },
            "start": 278,
            "end": 291
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "parsers",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 301
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "readline",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 310
              },
              "optional": false,
              "computed": false,
              "start": 294,
              "end": 310
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 294,
            "end": 312
          },
          "definite": false,
          "start": 278,
          "end": 312
        }
      ],
      "declare": false,
      "start": 274,
      "end": 313
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 319
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 10,
    "end": 20,
    "range": [
      10,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "eventEmitter",
    "start": 28,
    "end": 40,
    "range": [
      28,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "buffer",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 58,
    "end": 64,
    "range": [
      58,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 67,
    "end": 71,
    "range": [
      67,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 75,
    "end": 84,
    "range": [
      75,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "Parsers",
    "start": 85,
    "end": 92,
    "range": [
      85,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 99,
    "end": 102,
    "range": [
      99,
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
    "value": "ParserFunc",
    "start": 104,
    "end": 114,
    "range": [
      104,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "readline",
    "start": 120,
    "end": 128,
    "range": [
      120,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "delimiter",
    "start": 129,
    "end": 138,
    "range": [
      129,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 150,
    "end": 160,
    "range": [
      150,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 168,
    "end": 175,
    "range": [
      168,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "Parsers",
    "start": 177,
    "end": 184,
    "range": [
      177,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 193,
    "end": 203,
    "range": [
      193,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 206,
    "end": 213,
    "range": [
      206,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 214,
    "end": 217,
    "range": [
      214,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 226,
    "end": 229,
    "range": [
      226,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 233,
    "end": 243,
    "range": [
      233,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 246,
    "end": 253,
    "range": [
      246,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "readline",
    "start": 254,
    "end": 262,
    "range": [
      254,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 281,
    "end": 291,
    "range": [
      281,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 294,
    "end": 301,
    "range": [
      294,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "readline",
    "start": 302,
    "end": 310,
    "range": [
      302,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  }
]
```
