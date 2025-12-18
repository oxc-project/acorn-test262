__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30,
    "range": [
      28,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 40,
    "end": 53,
    "range": [
      40,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 55,
    "end": 61,
    "range": [
      55,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66,
    "range": [
      64,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75,
    "range": [
      71,
      75
    ]
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 76,
    "end": 89,
    "range": [
      76,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 100,
    "end": 102,
    "range": [
      100,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107,
    "range": [
      103,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 113,
    "end": 122,
    "range": [
      113,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130,
    "range": [
      124,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136,
    "range": [
      131,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 141,
    "end": 144,
    "range": [
      141,
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
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 163,
    "end": 166,
    "range": [
      163,
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
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 185,
    "end": 189,
    "range": [
      185,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 200,
    "end": 202,
    "range": [
      200,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 203,
    "end": 207,
    "range": [
      203,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 208,
    "end": 212,
    "range": [
      208,
      212
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 213,
    "end": 224,
    "range": [
      213,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
    "end": 237,
    "range": [
      235,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 243,
    "end": 247,
    "range": [
      243,
      247
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 248,
    "end": 259,
    "range": [
      248,
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
    "type": "Punctuator",
    "value": "*",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 270,
    "end": 272,
    "range": [
      270,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 279,
    "end": 283,
    "range": [
      279,
      283
    ]
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 284,
    "end": 291,
    "range": [
      284,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 293,
    "end": 299,
    "range": [
      293,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305,
    "range": [
      300,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 310,
    "end": 314,
    "range": [
      310,
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
    "value": "const",
    "start": 323,
    "end": 328,
    "range": [
      323,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345,
    "range": [
      339,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351,
    "range": [
      346,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 356,
    "end": 361,
    "range": [
      356,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30,
    "range": [
      28,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 40,
    "end": 53,
    "range": [
      40,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 55,
    "end": 61,
    "range": [
      55,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66,
    "range": [
      64,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75,
    "range": [
      71,
      75
    ]
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 76,
    "end": 89,
    "range": [
      76,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 100,
    "end": 102,
    "range": [
      100,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107,
    "range": [
      103,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 113,
    "end": 122,
    "range": [
      113,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130,
    "range": [
      124,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136,
    "range": [
      131,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 141,
    "end": 144,
    "range": [
      141,
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
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 163,
    "end": 166,
    "range": [
      163,
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
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 185,
    "end": 189,
    "range": [
      185,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 200,
    "end": 202,
    "range": [
      200,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 203,
    "end": 207,
    "range": [
      203,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 208,
    "end": 212,
    "range": [
      208,
      212
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 213,
    "end": 224,
    "range": [
      213,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
    "end": 237,
    "range": [
      235,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 243,
    "end": 247,
    "range": [
      243,
      247
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 248,
    "end": 259,
    "range": [
      248,
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
    "type": "Punctuator",
    "value": "*",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 270,
    "end": 272,
    "range": [
      270,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 279,
    "end": 283,
    "range": [
      279,
      283
    ]
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 284,
    "end": 291,
    "range": [
      284,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 293,
    "end": 299,
    "range": [
      293,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305,
    "range": [
      300,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 310,
    "end": 314,
    "range": [
      310,
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
    "value": "const",
    "start": 323,
    "end": 328,
    "range": [
      323,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345,
    "range": [
      339,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351,
    "range": [
      346,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 356,
    "end": 361,
    "range": [
      356,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30,
    "range": [
      28,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 40,
    "end": 53,
    "range": [
      40,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 55,
    "end": 61,
    "range": [
      55,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66,
    "range": [
      64,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75,
    "range": [
      71,
      75
    ]
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 76,
    "end": 89,
    "range": [
      76,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 100,
    "end": 102,
    "range": [
      100,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107,
    "range": [
      103,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 113,
    "end": 122,
    "range": [
      113,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130,
    "range": [
      124,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136,
    "range": [
      131,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 141,
    "end": 144,
    "range": [
      141,
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
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 163,
    "end": 166,
    "range": [
      163,
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
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 185,
    "end": 189,
    "range": [
      185,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 200,
    "end": 202,
    "range": [
      200,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 203,
    "end": 207,
    "range": [
      203,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 208,
    "end": 212,
    "range": [
      208,
      212
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 213,
    "end": 224,
    "range": [
      213,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
    "end": 237,
    "range": [
      235,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 243,
    "end": 247,
    "range": [
      243,
      247
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 248,
    "end": 259,
    "range": [
      248,
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
    "type": "Punctuator",
    "value": "*",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 270,
    "end": 272,
    "range": [
      270,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 279,
    "end": 283,
    "range": [
      279,
      283
    ]
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 284,
    "end": 291,
    "range": [
      284,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 293,
    "end": 299,
    "range": [
      293,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305,
    "range": [
      300,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 310,
    "end": 314,
    "range": [
      310,
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
    "value": "const",
    "start": 323,
    "end": 328,
    "range": [
      323,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345,
    "range": [
      339,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351,
    "range": [
      346,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 356,
    "end": 361,
    "range": [
      356,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "directive": null,
      "start": 118,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "directive": null,
      "start": 123,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 132
      },
      "directive": null,
      "start": 128,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsMain",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 154
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 157,
              "end": 161
            },
            "definite": false,
            "start": 147,
            "end": 161
          }
        ],
        "declare": false,
        "start": 141,
        "end": 162
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 162
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 162
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30,
    "range": [
      28,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 40,
    "end": 51,
    "range": [
      40,
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
    "value": "import",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64,
    "range": [
      62,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 65,
    "end": 68,
    "range": [
      65,
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
    "value": "\"inner/mjs\"",
    "start": 74,
    "end": 85,
    "range": [
      74,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103,
    "range": [
      99,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 109,
    "end": 116,
    "range": [
      109,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 118,
    "end": 121,
    "range": [
      118,
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
    "type": "Identifier",
    "value": "mjs",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132,
    "range": [
      128,
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
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140,
    "range": [
      134,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 141,
    "end": 146,
    "range": [
      141,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsMain",
    "start": 147,
    "end": 154,
    "range": [
      147,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 157,
    "end": 161,
    "range": [
      157,
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "directive": null,
      "start": 118,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "directive": null,
      "start": 123,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 132
      },
      "directive": null,
      "start": 128,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "esm",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 150
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 153,
              "end": 157
            },
            "definite": false,
            "start": 147,
            "end": 157
          }
        ],
        "declare": false,
        "start": 141,
        "end": 158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 158
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 158
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30,
    "range": [
      28,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 40,
    "end": 51,
    "range": [
      40,
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
    "value": "import",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64,
    "range": [
      62,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 65,
    "end": 68,
    "range": [
      65,
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
    "value": "\"inner/mjs\"",
    "start": 74,
    "end": 85,
    "range": [
      74,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103,
    "range": [
      99,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 109,
    "end": 116,
    "range": [
      109,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 118,
    "end": 121,
    "range": [
      118,
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
    "type": "Identifier",
    "value": "mjs",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132,
    "range": [
      128,
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
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140,
    "range": [
      134,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 141,
    "end": 146,
    "range": [
      141,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "esm",
    "start": 147,
    "end": 150,
    "range": [
      147,
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
    "type": "Boolean",
    "value": "true",
    "start": 153,
    "end": 157,
    "range": [
      153,
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "directive": null,
      "start": 118,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "directive": null,
      "start": 123,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 132
      },
      "directive": null,
      "start": 128,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsNonmain",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 157
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 160,
              "end": 164
            },
            "definite": false,
            "start": 147,
            "end": 164
          }
        ],
        "declare": false,
        "start": 141,
        "end": 165
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 165
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 165
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30,
    "range": [
      28,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 40,
    "end": 51,
    "range": [
      40,
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
    "value": "import",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64,
    "range": [
      62,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 65,
    "end": 68,
    "range": [
      65,
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
    "value": "\"inner/mjs\"",
    "start": 74,
    "end": 85,
    "range": [
      74,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103,
    "range": [
      99,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 109,
    "end": 116,
    "range": [
      109,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 118,
    "end": 121,
    "range": [
      118,
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
    "type": "Identifier",
    "value": "mjs",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132,
    "range": [
      128,
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
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140,
    "range": [
      134,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 141,
    "end": 146,
    "range": [
      141,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsNonmain",
    "start": 147,
    "end": 157,
    "range": [
      147,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 160,
    "end": 164,
    "range": [
      160,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  }
]
```
