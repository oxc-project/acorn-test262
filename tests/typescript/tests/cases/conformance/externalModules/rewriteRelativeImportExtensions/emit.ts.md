__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "module",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 33,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "start": 25,
          "end": 39
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 42,
          "end": 45
        },
        "start": 40,
        "end": 45
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
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
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 17,
    "end": 24,
    "range": [
      17,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
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
    "value": "any",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 11,
      "end": 37
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../foo.mts",
        "raw": "\"../foo.mts\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 66
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../../foo.cts",
        "raw": "\"../../foo.cts\"",
        "start": 82,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.tsx",
        "raw": "\"./foo.tsx\"",
        "start": 114,
        "end": 125
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 126
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 137
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 148,
          "end": 158
        },
        "start": 140,
        "end": 159
      },
      "importKind": "value",
      "start": 127,
      "end": 160
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 168,
        "end": 178
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 161,
      "end": 179
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 194,
        "end": 204
      },
      "attributes": [],
      "exportKind": "value",
      "start": 180,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 220,
          "end": 230
        },
        "options": null,
        "phase": null,
        "start": 213,
        "end": 231
      },
      "directive": null,
      "start": 213,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 240,
              "end": 250
            },
            "options": null,
            "phase": null,
            "start": 233,
            "end": 251
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 256
          },
          "optional": false,
          "computed": false,
          "start": 233,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 263,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 257,
            "end": 265
          }
        ],
        "optional": false,
        "start": 233,
        "end": 266
      },
      "directive": null,
      "start": 233,
      "end": 267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 292,
              "end": 295
            },
            "start": 290,
            "end": 295
          },
          "start": 287,
          "end": 295
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 297,
        "end": 299
      },
      "expression": false,
      "start": 268,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptAny",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 317,
              "end": 327
            },
            "options": null,
            "phase": null,
            "start": 310,
            "end": 328
          }
        ],
        "optional": false,
        "start": 300,
        "end": 329
      },
      "directive": null,
      "start": 300,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 338,
          "end": 348
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 356
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 360,
                      "end": 364
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 366,
                      "end": 373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 360,
                    "end": 373
                  }
                ],
                "start": 358,
                "end": 375
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 352,
              "end": 375
            }
          ],
          "start": 350,
          "end": 377
        },
        "phase": null,
        "start": 331,
        "end": 378
      },
      "directive": null,
      "start": 331,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 387,
            "end": 389
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 392,
            "end": 402
          },
          "start": 387,
          "end": 402
        },
        "options": null,
        "phase": null,
        "start": 380,
        "end": 403
      },
      "directive": null,
      "start": 380,
      "end": 404
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 404
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 11,
    "end": 17,
    "range": [
      11,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 26,
    "end": 36,
    "range": [
      26,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 38,
    "end": 44,
    "range": [
      38,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52,
    "range": [
      48,
      52
    ]
  },
  {
    "type": "String",
    "value": "\"../foo.mts\"",
    "start": 53,
    "end": 65,
    "range": [
      53,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81,
    "range": [
      77,
      81
    ]
  },
  {
    "type": "String",
    "value": "\"../../foo.cts\"",
    "start": 82,
    "end": 97,
    "range": [
      82,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 99,
    "end": 105,
    "range": [
      99,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.tsx\"",
    "start": 114,
    "end": 125,
    "range": [
      114,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 127,
    "end": 133,
    "range": [
      127,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 134,
    "end": 137,
    "range": [
      134,
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
    "value": "require",
    "start": 140,
    "end": 147,
    "range": [
      140,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 148,
    "end": 158,
    "range": [
      148,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 161,
    "end": 167,
    "range": [
      161,
      167
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 168,
    "end": 178,
    "range": [
      168,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 189,
    "end": 193,
    "range": [
      189,
      193
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 194,
    "end": 204,
    "range": [
      194,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 213,
    "end": 219,
    "range": [
      213,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 220,
    "end": 230,
    "range": [
      220,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 233,
    "end": 239,
    "range": [
      233,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 240,
    "end": 250,
    "range": [
      240,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 252,
    "end": 256,
    "range": [
      252,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 260,
    "end": 262,
    "range": [
      260,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276,
    "range": [
      268,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptAny",
    "start": 277,
    "end": 286,
    "range": [
      277,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 287,
    "end": 290,
    "range": [
      287,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 292,
    "end": 295,
    "range": [
      292,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptAny",
    "start": 300,
    "end": 309,
    "range": [
      300,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 310,
    "end": 316,
    "range": [
      310,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 317,
    "end": 327,
    "range": [
      317,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 331,
    "end": 337,
    "range": [
      331,
      337
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
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 338,
    "end": 348,
    "range": [
      338,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 352,
    "end": 356,
    "range": [
      352,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 360,
    "end": 364,
    "range": [
      360,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 366,
    "end": 373,
    "range": [
      366,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 380,
    "end": 386,
    "range": [
      380,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 387,
    "end": 389,
    "range": [
      387,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 392,
    "end": 402,
    "range": [
      392,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 11,
      "end": 37
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../foo.mts",
        "raw": "\"../foo.mts\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 66
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../../foo.cts",
        "raw": "\"../../foo.cts\"",
        "start": 82,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.tsx",
        "raw": "\"./foo.tsx\"",
        "start": 114,
        "end": 125
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 126
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 134,
        "end": 144
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 127,
      "end": 145
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 160,
        "end": 170
      },
      "attributes": [],
      "exportKind": "value",
      "start": 146,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 187,
          "end": 197
        },
        "options": null,
        "phase": null,
        "start": 180,
        "end": 198
      },
      "directive": null,
      "start": 180,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 207,
          "end": 217
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 225
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 233
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 235,
                      "end": 242
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 229,
                    "end": 242
                  }
                ],
                "start": 227,
                "end": 244
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 221,
              "end": 244
            }
          ],
          "start": 219,
          "end": 246
        },
        "phase": null,
        "start": 200,
        "end": 247
      },
      "directive": null,
      "start": 200,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 257,
            "end": 267
          }
        ],
        "optional": false,
        "start": 249,
        "end": 268
      },
      "directive": null,
      "start": 249,
      "end": 269
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 282,
                "end": 292
              }
            ],
            "optional": false,
            "start": 274,
            "end": 293
          },
          "directive": null,
          "start": 274,
          "end": 294
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 304
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getPath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 312
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 305,
                "end": 314
              }
            ],
            "optional": false,
            "start": 297,
            "end": 315
          },
          "directive": null,
          "start": 297,
          "end": 316
        }
      ],
      "start": 270,
      "end": 318
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 341
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 11,
    "end": 17,
    "range": [
      11,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 26,
    "end": 36,
    "range": [
      26,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 38,
    "end": 44,
    "range": [
      38,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52,
    "range": [
      48,
      52
    ]
  },
  {
    "type": "String",
    "value": "\"../foo.mts\"",
    "start": 53,
    "end": 65,
    "range": [
      53,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81,
    "range": [
      77,
      81
    ]
  },
  {
    "type": "String",
    "value": "\"../../foo.cts\"",
    "start": 82,
    "end": 97,
    "range": [
      82,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 99,
    "end": 105,
    "range": [
      99,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.tsx\"",
    "start": 114,
    "end": 125,
    "range": [
      114,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 127,
    "end": 133,
    "range": [
      127,
      133
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 134,
    "end": 144,
    "range": [
      134,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
    "end": 152,
    "range": [
      146,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 155,
    "end": 159,
    "range": [
      155,
      159
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 160,
    "end": 170,
    "range": [
      160,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 187,
    "end": 197,
    "range": [
      187,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 207,
    "end": 217,
    "range": [
      207,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 221,
    "end": 225,
    "range": [
      221,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 229,
    "end": 233,
    "range": [
      229,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 235,
    "end": 242,
    "range": [
      235,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 249,
    "end": 256,
    "range": [
      249,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 257,
    "end": 267,
    "range": [
      257,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 274,
    "end": 281,
    "range": [
      274,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 282,
    "end": 292,
    "range": [
      282,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 297,
    "end": 304,
    "range": [
      297,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "getPath",
    "start": 305,
    "end": 312,
    "range": [
      305,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts/foo.js",
        "raw": "\"./foo.ts/foo.js\"",
        "start": 15,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "foo.ts",
        "raw": "\"foo.ts\"",
        "start": 49,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 34,
      "end": 58
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "pkg/foo.ts",
        "raw": "\"pkg/foo.ts\"",
        "start": 74,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 87
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": ".foo.ts",
        "raw": "\".foo.ts\"",
        "start": 103,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 88,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.ts",
        "raw": "\"./foo.d.ts\"",
        "start": 129,
        "end": 141
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 142
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.mts",
        "raw": "\"./foo.d.mts\"",
        "start": 158,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 143,
      "end": 172
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.css.ts",
        "raw": "\"./foo.d.css.ts\"",
        "start": 188,
        "end": 204
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 173,
      "end": 205
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "#internal/foo.ts",
        "raw": "\"#internal/foo.ts\"",
        "start": 221,
        "end": 239
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 240
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "node:foo.ts",
        "raw": "\"node:foo.ts\"",
        "start": 256,
        "end": 269
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 241,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 279
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 281,
            "end": 291
          }
        ],
        "optional": false,
        "start": 271,
        "end": 292
      },
      "directive": null,
      "start": 271,
      "end": 293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "node:path",
          "raw": "\"node:path\"",
          "start": 301,
          "end": 312
        },
        "options": null,
        "phase": null,
        "start": 294,
        "end": 313
      },
      "directive": null,
      "start": 294,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 322
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "node:path",
            "raw": "\"node:path\"",
            "start": 323,
            "end": 334
          }
        ],
        "optional": false,
        "start": 315,
        "end": 335
      },
      "directive": null,
      "start": 315,
      "end": 336
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 337
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 10,
    "end": 14,
    "range": [
      10,
      14
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts/foo.js\"",
    "start": 15,
    "end": 32,
    "range": [
      15,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "String",
    "value": "\"foo.ts\"",
    "start": 49,
    "end": 57,
    "range": [
      49,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 69,
    "end": 73,
    "range": [
      69,
      73
    ]
  },
  {
    "type": "String",
    "value": "\"pkg/foo.ts\"",
    "start": 74,
    "end": 86,
    "range": [
      74,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 88,
    "end": 94,
    "range": [
      88,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 98,
    "end": 102,
    "range": [
      98,
      102
    ]
  },
  {
    "type": "String",
    "value": "\".foo.ts\"",
    "start": 103,
    "end": 112,
    "range": [
      103,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 114,
    "end": 120,
    "range": [
      114,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 124,
    "end": 128,
    "range": [
      124,
      128
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.d.ts\"",
    "start": 129,
    "end": 141,
    "range": [
      129,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 143,
    "end": 149,
    "range": [
      143,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 153,
    "end": 157,
    "range": [
      153,
      157
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.d.mts\"",
    "start": 158,
    "end": 171,
    "range": [
      158,
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
    "type": "Keyword",
    "value": "import",
    "start": 173,
    "end": 179,
    "range": [
      173,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 183,
    "end": 187,
    "range": [
      183,
      187
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.d.css.ts\"",
    "start": 188,
    "end": 204,
    "range": [
      188,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 206,
    "end": 212,
    "range": [
      206,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 216,
    "end": 220,
    "range": [
      216,
      220
    ]
  },
  {
    "type": "String",
    "value": "\"#internal/foo.ts\"",
    "start": 221,
    "end": 239,
    "range": [
      221,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 241,
    "end": 247,
    "range": [
      241,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 251,
    "end": 255,
    "range": [
      251,
      255
    ]
  },
  {
    "type": "String",
    "value": "\"node:foo.ts\"",
    "start": 256,
    "end": 269,
    "range": [
      256,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 272,
    "end": 279,
    "range": [
      272,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 281,
    "end": 291,
    "range": [
      281,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 294,
    "end": 300,
    "range": [
      294,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "String",
    "value": "\"node:path\"",
    "start": 301,
    "end": 312,
    "range": [
      301,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 315,
    "end": 322,
    "range": [
      315,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "String",
    "value": "\"node:path\"",
    "start": 323,
    "end": 334,
    "range": [
      323,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 135,
  "end": 135
}
```
__ESTREE_TEST__:TOKENS:
```json
[]
```
