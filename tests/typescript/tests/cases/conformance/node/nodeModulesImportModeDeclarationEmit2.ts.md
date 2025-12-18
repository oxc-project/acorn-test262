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
            "start": 53,
            "end": 70
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 72,
            "end": 81
          },
          "start": 53,
          "end": 81
        }
      ],
      "importKind": "type",
      "start": 0,
      "end": 84
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
            "start": 99,
            "end": 114
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 114
          },
          "importKind": "value",
          "start": 99,
          "end": 114
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 122,
        "end": 127
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 137,
            "end": 154
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 156,
            "end": 164
          },
          "start": 137,
          "end": 164
        }
      ],
      "importKind": "type",
      "start": 85,
      "end": 167
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
          "start": 186,
          "end": 200
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
              "start": 209,
              "end": 225
            },
            "typeArguments": null,
            "start": 209,
            "end": 225
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 242
            },
            "typeArguments": null,
            "start": 227,
            "end": 242
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 243,
          "end": 245
        },
        "declare": false,
        "start": 176,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 169,
      "end": 245
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
            "start": 260,
            "end": 276
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 283
          },
          "importKind": "type",
          "start": 255,
          "end": 283
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 290,
        "end": 295
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 305,
            "end": 322
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 324,
            "end": 333
          },
          "start": 305,
          "end": 333
        }
      ],
      "importKind": "value",
      "start": 247,
      "end": 336
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
            "start": 350,
            "end": 365
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Imp",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 372
          },
          "importKind": "type",
          "start": 345,
          "end": 372
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 379,
        "end": 384
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 394,
            "end": 411
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 413,
            "end": 421
          },
          "start": 394,
          "end": 421
        }
      ],
      "importKind": "value",
      "start": 337,
      "end": 424
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
          "start": 442,
          "end": 445
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
              "start": 454,
              "end": 457
            },
            "typeArguments": null,
            "start": 454,
            "end": 457
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Imp",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 462
            },
            "typeArguments": null,
            "start": 459,
            "end": 462
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 463,
          "end": 465
        },
        "declare": false,
        "start": 432,
        "end": 465
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 425,
      "end": 465
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
            "start": 481,
            "end": 497
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 497
          },
          "exportKind": "value",
          "start": 481,
          "end": 497
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 505,
        "end": 510
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 520,
            "end": 537
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 539,
            "end": 548
          },
          "start": 520,
          "end": 548
        }
      ],
      "start": 467,
      "end": 551
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
            "start": 566,
            "end": 581
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 581
          },
          "exportKind": "value",
          "start": 566,
          "end": 581
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 589,
        "end": 594
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 604,
            "end": 621
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 623,
            "end": 631
          },
          "start": 604,
          "end": 631
        }
      ],
      "start": 552,
      "end": 634
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 634
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
    "type": "Identifier",
    "value": "assert",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 53,
    "end": 70,
    "range": [
      53,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 72,
    "end": 81,
    "range": [
      72,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 92,
    "end": 96,
    "range": [
      92,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 99,
    "end": 114,
    "range": [
      99,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 117,
    "end": 121,
    "range": [
      117,
      121
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 122,
    "end": 127,
    "range": [
      122,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 128,
    "end": 134,
    "range": [
      128,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 137,
    "end": 154,
    "range": [
      137,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 156,
    "end": 164,
    "range": [
      156,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "export",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 176,
    "end": 185,
    "range": [
      176,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 186,
    "end": 200,
    "range": [
      186,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 201,
    "end": 208,
    "range": [
      201,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 209,
    "end": 225,
    "range": [
      209,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 227,
    "end": 242,
    "range": [
      227,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 255,
    "end": 259,
    "range": [
      255,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 260,
    "end": 276,
    "range": [
      260,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 277,
    "end": 279,
    "range": [
      277,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 280,
    "end": 283,
    "range": [
      280,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 285,
    "end": 289,
    "range": [
      285,
      289
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 290,
    "end": 295,
    "range": [
      290,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 296,
    "end": 302,
    "range": [
      296,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 305,
    "end": 322,
    "range": [
      305,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 324,
    "end": 333,
    "range": [
      324,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 337,
    "end": 343,
    "range": [
      337,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 345,
    "end": 349,
    "range": [
      345,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 350,
    "end": 365,
    "range": [
      350,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 366,
    "end": 368,
    "range": [
      366,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "Imp",
    "start": 369,
    "end": 372,
    "range": [
      369,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 374,
    "end": 378,
    "range": [
      374,
      378
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 379,
    "end": 384,
    "range": [
      379,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 385,
    "end": 391,
    "range": [
      385,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 394,
    "end": 411,
    "range": [
      394,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 413,
    "end": 421,
    "range": [
      413,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 425,
    "end": 431,
    "range": [
      425,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 432,
    "end": 441,
    "range": [
      432,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "Loc",
    "start": 442,
    "end": 445,
    "range": [
      442,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 446,
    "end": 453,
    "range": [
      446,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 454,
    "end": 457,
    "range": [
      454,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "Imp",
    "start": 459,
    "end": 462,
    "range": [
      459,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 467,
    "end": 473,
    "range": [
      467,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 474,
    "end": 478,
    "range": [
      474,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 481,
    "end": 497,
    "range": [
      481,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 500,
    "end": 504,
    "range": [
      500,
      504
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 505,
    "end": 510,
    "range": [
      505,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 511,
    "end": 517,
    "range": [
      511,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 520,
    "end": 537,
    "range": [
      520,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 539,
    "end": 548,
    "range": [
      539,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 552,
    "end": 558,
    "range": [
      552,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 559,
    "end": 563,
    "range": [
      559,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 566,
    "end": 581,
    "range": [
      566,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 589,
    "end": 594,
    "range": [
      589,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 595,
    "end": 601,
    "range": [
      595,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 604,
    "end": 621,
    "range": [
      604,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 623,
    "end": 631,
    "range": [
      623,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  }
]
```
