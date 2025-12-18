__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ambientModule",
        "raw": "\"ambientModule\"",
        "start": 15,
        "end": 30
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "typ",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 52
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 55,
                  "end": 56
                },
                "start": 55,
                "end": 56
              },
              "declare": false,
              "start": 44,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 37,
            "end": 56
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "typ",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 77,
                          "end": 80
                        },
                        "typeArguments": null,
                        "start": 77,
                        "end": 80
                      },
                      "start": 75,
                      "end": 80
                    },
                    "start": 72,
                    "end": 80
                  },
                  "init": null,
                  "definite": false,
                  "start": 72,
                  "end": 80
                }
              ],
              "declare": false,
              "start": 68,
              "end": 80
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 61,
            "end": 80
          }
        ],
        "start": 31,
        "end": 82
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "valueModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 104
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 121
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 124,
                    "end": 125
                  },
                  "definite": false,
                  "start": 118,
                  "end": 125
                }
              ],
              "declare": false,
              "start": 114,
              "end": 125
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 107,
            "end": 125
          }
        ],
        "start": 105,
        "end": 127
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 83,
      "end": 127
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "namespaceModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 153
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "typ",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 171
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 174,
                  "end": 175
                },
                "start": 174,
                "end": 175
              },
              "declare": false,
              "start": 163,
              "end": 175
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 156,
            "end": 175
          }
        ],
        "start": 154,
        "end": 177
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 128,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalBad1",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 230
          },
          "typeArguments": null,
          "start": 213,
          "end": 230
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "\"ambientModule\"",
            "raw": "\"\\\"ambientModule\\\"\"",
            "start": 232,
            "end": 251
          },
          "start": 232,
          "end": 251
        },
        "start": 212,
        "end": 252
      },
      "declare": false,
      "start": 194,
      "end": 252
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalOk1",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 267
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 288
          },
          "typeArguments": null,
          "start": 271,
          "end": 288
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "valueModule",
            "raw": "\"valueModule\"",
            "start": 290,
            "end": 303
          },
          "start": 290,
          "end": 303
        },
        "start": 270,
        "end": 304
      },
      "declare": false,
      "start": 253,
      "end": 304
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalOk2",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 319
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 332
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "namespaceModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 348
            },
            "start": 322,
            "end": 348
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "typ",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 352
          },
          "start": 322,
          "end": 352
        },
        "typeArguments": null,
        "start": 322,
        "end": 352
      },
      "declare": false,
      "start": 305,
      "end": 352
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
            "name": "bad1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 383
                  },
                  "typeArguments": null,
                  "start": 366,
                  "end": 383
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "\"ambientModule\"",
                    "raw": "\"\\\"ambientModule\\\"\"",
                    "start": 385,
                    "end": 404
                  },
                  "start": 385,
                  "end": 404
                },
                "start": 365,
                "end": 405
              },
              "start": 363,
              "end": 405
            },
            "start": 359,
            "end": 405
          },
          "init": {
            "type": "Literal",
            "value": "ambientModule",
            "raw": "'ambientModule'",
            "start": 408,
            "end": 423
          },
          "definite": false,
          "start": 359,
          "end": 423
        }
      ],
      "declare": false,
      "start": 353,
      "end": 423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 423
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
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "String",
    "value": "\"ambientModule\"",
    "start": 15,
    "end": 30,
    "range": [
      15,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "typ",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 72,
    "end": 75,
    "range": [
      72,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "typ",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 83,
    "end": 92,
    "range": [
      83,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "valueModule",
    "start": 93,
    "end": 104,
    "range": [
      93,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113,
    "range": [
      107,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 114,
    "end": 117,
    "range": [
      114,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 118,
    "end": 121,
    "range": [
      118,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 128,
    "end": 137,
    "range": [
      128,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "namespaceModule",
    "start": 138,
    "end": 153,
    "range": [
      138,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 156,
    "end": 162,
    "range": [
      156,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 163,
    "end": 167,
    "range": [
      163,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "typ",
    "start": 168,
    "end": 171,
    "range": [
      168,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 194,
    "end": 198,
    "range": [
      194,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalBad1",
    "start": 199,
    "end": 209,
    "range": [
      199,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
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
    "type": "Keyword",
    "value": "typeof",
    "start": 213,
    "end": 219,
    "range": [
      213,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
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
    "value": "[",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "String",
    "value": "\"\\\"ambientModule\\\"\"",
    "start": 232,
    "end": 251,
    "range": [
      232,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 253,
    "end": 257,
    "range": [
      253,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalOk1",
    "start": 258,
    "end": 267,
    "range": [
      258,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 271,
    "end": 277,
    "range": [
      271,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 278,
    "end": 288,
    "range": [
      278,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "String",
    "value": "\"valueModule\"",
    "start": 290,
    "end": 303,
    "range": [
      290,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 305,
    "end": 309,
    "range": [
      305,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalOk2",
    "start": 310,
    "end": 319,
    "range": [
      310,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 322,
    "end": 332,
    "range": [
      322,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "namespaceModule",
    "start": 333,
    "end": 348,
    "range": [
      333,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "typ",
    "start": 349,
    "end": 352,
    "range": [
      349,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358,
    "range": [
      353,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "bad1",
    "start": 359,
    "end": 363,
    "range": [
      359,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 366,
    "end": 372,
    "range": [
      366,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 373,
    "end": 383,
    "range": [
      373,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "String",
    "value": "\"\\\"ambientModule\\\"\"",
    "start": 385,
    "end": 404,
    "range": [
      385,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "String",
    "value": "'ambientModule'",
    "start": 408,
    "end": 423,
    "range": [
      408,
      423
    ]
  }
]
```
