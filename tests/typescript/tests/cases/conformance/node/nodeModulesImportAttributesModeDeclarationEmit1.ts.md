__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 33,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 17,
    "end": 32,
    "range": [
      17,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 33
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 34,
          "end": 36
        },
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 17,
    "end": 33,
    "range": [
      17,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 30
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 30
          },
          "importKind": "value",
          "start": 14,
          "end": 30
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 38,
        "end": 43
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 51,
            "end": 68
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 70,
            "end": 79
          },
          "start": 51,
          "end": 79
        }
      ],
      "importKind": "type",
      "start": 0,
      "end": 82
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 112
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 112
          },
          "importKind": "value",
          "start": 97,
          "end": 112
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 120,
        "end": 125
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 133,
            "end": 150
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 152,
            "end": 160
          },
          "start": 133,
          "end": 160
        }
      ],
      "importKind": "type",
      "start": 83,
      "end": 163
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 196
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 221
            },
            "typeArguments": null,
            "start": 205,
            "end": 221
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 238
            },
            "typeArguments": null,
            "start": 223,
            "end": 238
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 239,
          "end": 241
        },
        "declare": false,
        "start": 172,
        "end": 241
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 165,
      "end": 241
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 272
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 279
          },
          "importKind": "type",
          "start": 251,
          "end": 279
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 286,
        "end": 291
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 299,
            "end": 316
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 318,
            "end": 327
          },
          "start": 299,
          "end": 327
        }
      ],
      "importKind": "value",
      "start": 243,
      "end": 330
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 359
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Imp",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 366
          },
          "importKind": "type",
          "start": 339,
          "end": 366
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 373,
        "end": 378
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 386,
            "end": 403
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 405,
            "end": 413
          },
          "start": 386,
          "end": 413
        }
      ],
      "importKind": "value",
      "start": 331,
      "end": 416
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Loc",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 437
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Req",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 449
            },
            "typeArguments": null,
            "start": 446,
            "end": 449
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Imp",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 454
            },
            "typeArguments": null,
            "start": 451,
            "end": 454
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 455,
          "end": 457
        },
        "declare": false,
        "start": 424,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 417,
      "end": 457
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 489
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 489
          },
          "exportKind": "value",
          "start": 473,
          "end": 489
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 497,
        "end": 502
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 510,
            "end": 527
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 529,
            "end": 538
          },
          "start": 510,
          "end": 538
        }
      ],
      "start": 459,
      "end": 541
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 571
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 571
          },
          "exportKind": "value",
          "start": 556,
          "end": 571
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 579,
        "end": 584
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 592,
            "end": 609
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 611,
            "end": 619
          },
          "start": 592,
          "end": 619
        }
      ],
      "start": 542,
      "end": 622
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 622
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
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 14,
    "end": 30,
    "range": [
      14,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 33,
    "end": 37,
    "range": [
      33,
      37
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 38,
    "end": 43,
    "range": [
      38,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 51,
    "end": 68,
    "range": [
      51,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 70,
    "end": 79,
    "range": [
      70,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81,
    "range": [
      80,
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
    "value": "import",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 90,
    "end": 94,
    "range": [
      90,
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
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 97,
    "end": 112,
    "range": [
      97,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 115,
    "end": 119,
    "range": [
      115,
      119
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 120,
    "end": 125,
    "range": [
      120,
      125
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 126,
    "end": 130,
    "range": [
      126,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 133,
    "end": 150,
    "range": [
      133,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 152,
    "end": 160,
    "range": [
      152,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 165,
    "end": 171,
    "range": [
      165,
      171
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 172,
    "end": 181,
    "range": [
      172,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 182,
    "end": 196,
    "range": [
      182,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 197,
    "end": 204,
    "range": [
      197,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 205,
    "end": 221,
    "range": [
      205,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 223,
    "end": 238,
    "range": [
      223,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 243,
    "end": 249,
    "range": [
      243,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 251,
    "end": 255,
    "range": [
      251,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 256,
    "end": 272,
    "range": [
      256,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 273,
    "end": 275,
    "range": [
      273,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 276,
    "end": 279,
    "range": [
      276,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 281,
    "end": 285,
    "range": [
      281,
      285
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 286,
    "end": 291,
    "range": [
      286,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 292,
    "end": 296,
    "range": [
      292,
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
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 299,
    "end": 316,
    "range": [
      299,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 318,
    "end": 327,
    "range": [
      318,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 339,
    "end": 343,
    "range": [
      339,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 344,
    "end": 359,
    "range": [
      344,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 360,
    "end": 362,
    "range": [
      360,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "Imp",
    "start": 363,
    "end": 366,
    "range": [
      363,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 368,
    "end": 372,
    "range": [
      368,
      372
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 373,
    "end": 378,
    "range": [
      373,
      378
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 379,
    "end": 383,
    "range": [
      379,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 386,
    "end": 403,
    "range": [
      386,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 405,
    "end": 413,
    "range": [
      405,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 417,
    "end": 423,
    "range": [
      417,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 424,
    "end": 433,
    "range": [
      424,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "Loc",
    "start": 434,
    "end": 437,
    "range": [
      434,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 438,
    "end": 445,
    "range": [
      438,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 446,
    "end": 449,
    "range": [
      446,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "Imp",
    "start": 451,
    "end": 454,
    "range": [
      451,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 466,
    "end": 470,
    "range": [
      466,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 473,
    "end": 489,
    "range": [
      473,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 492,
    "end": 496,
    "range": [
      492,
      496
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 497,
    "end": 502,
    "range": [
      497,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 503,
    "end": 507,
    "range": [
      503,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 510,
    "end": 527,
    "range": [
      510,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 529,
    "end": 538,
    "range": [
      529,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 542,
    "end": 548,
    "range": [
      542,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 549,
    "end": 553,
    "range": [
      549,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 556,
    "end": 571,
    "range": [
      556,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 574,
    "end": 578,
    "range": [
      574,
      578
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 579,
    "end": 584,
    "range": [
      579,
      584
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 585,
    "end": 589,
    "range": [
      585,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 592,
    "end": 609,
    "range": [
      592,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 611,
    "end": 619,
    "range": [
      611,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  }
]
```
