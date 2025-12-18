__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "exportKind": "value",
      "start": 12,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12,
    "end": 18,
    "range": [
      12,
      18
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 19,
    "end": 26,
    "range": [
      19,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 27,
    "end": 28,
    "range": [
      27,
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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 22
          },
          "start": 7,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 33,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 58
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultBinding1",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 80
              },
              "typeArguments": null,
              "arguments": [],
              "start": 61,
              "end": 82
            },
            "definite": false,
            "start": 56,
            "end": 82
          }
        ],
        "declare": false,
        "start": 52,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 45,
      "end": 83
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 106
          },
          "start": 91,
          "end": 106
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "importKind": "value",
          "start": 110,
          "end": 111
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 119,
        "end": 129
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 84,
      "end": 130
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
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 144
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultBinding2",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 166
              },
              "typeArguments": null,
              "arguments": [],
              "start": 147,
              "end": 168
            },
            "definite": false,
            "start": 142,
            "end": 168
          }
        ],
        "declare": false,
        "start": 138,
        "end": 169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 131,
      "end": 169
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 192
          },
          "start": 177,
          "end": 192
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "importKind": "value",
          "start": 196,
          "end": 202
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 210,
        "end": 220
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 170,
      "end": 221
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
              "name": "x3",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 235
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultBinding3",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 257
              },
              "typeArguments": null,
              "arguments": [],
              "start": 238,
              "end": 259
            },
            "definite": false,
            "start": 233,
            "end": 259
          }
        ],
        "declare": false,
        "start": 229,
        "end": 260
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 222,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 283
          },
          "start": 268,
          "end": 283
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          "importKind": "value",
          "start": 287,
          "end": 288
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 291
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 296
          },
          "importKind": "value",
          "start": 290,
          "end": 296
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 304,
        "end": 314
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 315
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
              "name": "x4",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 329
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultBinding4",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 351
              },
              "typeArguments": null,
              "arguments": [],
              "start": 332,
              "end": 353
            },
            "definite": false,
            "start": 327,
            "end": 353
          }
        ],
        "declare": false,
        "start": 323,
        "end": 354
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 354
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null,
            "start": 362,
            "end": 377
          },
          "start": 362,
          "end": 377
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 382
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 387
          },
          "importKind": "value",
          "start": 381,
          "end": 387
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 397,
        "end": 407
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 355,
      "end": 408
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
              "name": "x5",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 422
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultBinding5",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 444
              },
              "typeArguments": null,
              "arguments": [],
              "start": 425,
              "end": 446
            },
            "definite": false,
            "start": 420,
            "end": 446
          }
        ],
        "declare": false,
        "start": 416,
        "end": 447
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 409,
      "end": 447
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 470
          },
          "start": 455,
          "end": 470
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 475
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 475
          },
          "importKind": "value",
          "start": 474,
          "end": 475
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 485,
        "end": 495
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 448,
      "end": 496
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
              "name": "x6",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 510
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultBinding6",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 532
              },
              "typeArguments": null,
              "arguments": [],
              "start": 513,
              "end": 534
            },
            "definite": false,
            "start": 508,
            "end": 534
          }
        ],
        "declare": false,
        "start": 504,
        "end": 535
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 497,
      "end": 535
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 535
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
    "type": "Identifier",
    "value": "defaultBinding1",
    "start": 7,
    "end": 22,
    "range": [
      7,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 28,
    "end": 32,
    "range": [
      28,
      32
    ]
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 33,
    "end": 43,
    "range": [
      33,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 52,
    "end": 55,
    "range": [
      52,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 56,
    "end": 58,
    "range": [
      56,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding1",
    "start": 65,
    "end": 80,
    "range": [
      65,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding2",
    "start": 91,
    "end": 106,
    "range": [
      91,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 114,
    "end": 118,
    "range": [
      114,
      118
    ]
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 119,
    "end": 129,
    "range": [
      119,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 131,
    "end": 137,
    "range": [
      131,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 142,
    "end": 144,
    "range": [
      142,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 147,
    "end": 150,
    "range": [
      147,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding2",
    "start": 151,
    "end": 166,
    "range": [
      151,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 170,
    "end": 176,
    "range": [
      170,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding3",
    "start": 177,
    "end": 192,
    "range": [
      177,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 205,
    "end": 209,
    "range": [
      205,
      209
    ]
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 210,
    "end": 220,
    "range": [
      210,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 222,
    "end": 228,
    "range": [
      222,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232,
    "range": [
      229,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 233,
    "end": 235,
    "range": [
      233,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 238,
    "end": 241,
    "range": [
      238,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding3",
    "start": 242,
    "end": 257,
    "range": [
      242,
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
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding4",
    "start": 268,
    "end": 283,
    "range": [
      268,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 292,
    "end": 294,
    "range": [
      292,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 299,
    "end": 303,
    "range": [
      299,
      303
    ]
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 304,
    "end": 314,
    "range": [
      304,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 316,
    "end": 322,
    "range": [
      316,
      322
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 323,
    "end": 326,
    "range": [
      323,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 327,
    "end": 329,
    "range": [
      327,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 332,
    "end": 335,
    "range": [
      332,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding4",
    "start": 336,
    "end": 351,
    "range": [
      336,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 355,
    "end": 361,
    "range": [
      355,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding5",
    "start": 362,
    "end": 377,
    "range": [
      362,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 383,
    "end": 385,
    "range": [
      383,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 392,
    "end": 396,
    "range": [
      392,
      396
    ]
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 397,
    "end": 407,
    "range": [
      397,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 409,
    "end": 415,
    "range": [
      409,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 416,
    "end": 419,
    "range": [
      416,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 425,
    "end": 428,
    "range": [
      425,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding5",
    "start": 429,
    "end": 444,
    "range": [
      429,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 448,
    "end": 454,
    "range": [
      448,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding6",
    "start": 455,
    "end": 470,
    "range": [
      455,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 480,
    "end": 484,
    "range": [
      480,
      484
    ]
  },
  {
    "type": "String",
    "value": "\"./server\"",
    "start": 485,
    "end": 495,
    "range": [
      485,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 497,
    "end": 503,
    "range": [
      497,
      503
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 504,
    "end": 507,
    "range": [
      504,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 508,
    "end": 510,
    "range": [
      508,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 513,
    "end": 516,
    "range": [
      513,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultBinding6",
    "start": 517,
    "end": 532,
    "range": [
      517,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  }
]
```
