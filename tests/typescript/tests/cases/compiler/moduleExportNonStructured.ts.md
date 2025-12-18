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
            "name": "exportAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 21
          },
          "start": 7,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportAny.cjs",
        "raw": "\"./exportAny.cjs\"",
        "start": 27,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 45
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportUnknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 71
          },
          "start": 53,
          "end": 71
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportUnknown.cjs",
        "raw": "\"./exportUnknown.cjs\"",
        "start": 77,
        "end": 98
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 46,
      "end": 99
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportSymbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 124
          },
          "start": 107,
          "end": 124
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportSymbol.cjs",
        "raw": "\"./exportSymbol.cjs\"",
        "start": 130,
        "end": 150
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 100,
      "end": 151
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportAnyType",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 183
          },
          "start": 165,
          "end": 183
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportAny.cjs",
        "raw": "\"./exportAny.cjs\"",
        "start": 189,
        "end": 206
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 153,
      "end": 207
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportUnknownType",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 242
          },
          "start": 220,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportUnknown.cjs",
        "raw": "\"./exportUnknown.cjs\"",
        "start": 248,
        "end": 269
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 208,
      "end": 270
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportSymbolType",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 304
          },
          "start": 283,
          "end": 304
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exportSymbol.cjs",
        "raw": "\"./exportSymbol.cjs\"",
        "start": 310,
        "end": 330
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 271,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 332
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
    "value": "*",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "exportAny",
    "start": 12,
    "end": 21,
    "range": [
      12,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "String",
    "value": "\"./exportAny.cjs\"",
    "start": 27,
    "end": 44,
    "range": [
      27,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 55,
    "end": 57,
    "range": [
      55,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "exportUnknown",
    "start": 58,
    "end": 71,
    "range": [
      58,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 72,
    "end": 76,
    "range": [
      72,
      76
    ]
  },
  {
    "type": "String",
    "value": "\"./exportUnknown.cjs\"",
    "start": 77,
    "end": 98,
    "range": [
      77,
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
    "value": "import",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 109,
    "end": 111,
    "range": [
      109,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "exportSymbol",
    "start": 112,
    "end": 124,
    "range": [
      112,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 125,
    "end": 129,
    "range": [
      125,
      129
    ]
  },
  {
    "type": "String",
    "value": "\"./exportSymbol.cjs\"",
    "start": 130,
    "end": 150,
    "range": [
      130,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 160,
    "end": 164,
    "range": [
      160,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 167,
    "end": 169,
    "range": [
      167,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "exportAnyType",
    "start": 170,
    "end": 183,
    "range": [
      170,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 184,
    "end": 188,
    "range": [
      184,
      188
    ]
  },
  {
    "type": "String",
    "value": "\"./exportAny.cjs\"",
    "start": 189,
    "end": 206,
    "range": [
      189,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 208,
    "end": 214,
    "range": [
      208,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 215,
    "end": 219,
    "range": [
      215,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 222,
    "end": 224,
    "range": [
      222,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "exportUnknownType",
    "start": 225,
    "end": 242,
    "range": [
      225,
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
    "value": "\"./exportUnknown.cjs\"",
    "start": 248,
    "end": 269,
    "range": [
      248,
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
    "type": "Keyword",
    "value": "import",
    "start": 271,
    "end": 277,
    "range": [
      271,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 278,
    "end": 282,
    "range": [
      278,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 285,
    "end": 287,
    "range": [
      285,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "exportSymbolType",
    "start": 288,
    "end": 304,
    "range": [
      288,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 305,
    "end": 309,
    "range": [
      305,
      309
    ]
  },
  {
    "type": "String",
    "value": "\"./exportSymbol.cjs\"",
    "start": 310,
    "end": 330,
    "range": [
      310,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
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
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              },
              "start": 16,
              "end": 21
            },
            "start": 14,
            "end": 21
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 21
        }
      ],
      "declare": true,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "__",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
      },
      "start": 23,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
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
    "value": "__",
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
    "value": "any",
    "start": 18,
    "end": 21,
    "range": [
      18,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "__",
    "start": 32,
    "end": 34,
    "range": [
      32,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 18,
                "end": 25
              },
              "start": 16,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "__",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 38
      },
      "start": 27,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
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
    "value": "__",
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
    "value": "unknown",
    "start": 18,
    "end": 25,
    "range": [
      18,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "__",
    "start": 36,
    "end": 38,
    "range": [
      36,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
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
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "start": 14,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "__",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 37
      },
      "start": 26,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
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
    "value": "__",
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
    "value": "symbol",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "__",
    "start": 35,
    "end": 37,
    "range": [
      35,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  }
]
```
