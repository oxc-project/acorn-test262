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
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 35
          },
          "start": 26,
          "end": 35
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs/exclude/index",
        "raw": "\"inner/cjs/exclude/index\"",
        "start": 41,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 67
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
            "start": 80,
            "end": 84
          },
          "start": 75,
          "end": 84
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/exclude/index",
        "raw": "\"inner/mjs/exclude/index\"",
        "start": 90,
        "end": 115
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 68,
      "end": 116
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
            "start": 129,
            "end": 134
          },
          "start": 124,
          "end": 134
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/exclude/index",
        "raw": "\"inner/js/exclude/index\"",
        "start": 140,
        "end": 164
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 117,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 170
      },
      "directive": null,
      "start": 166,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 176
      },
      "directive": null,
      "start": 172,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 183
      },
      "directive": null,
      "start": 178,
      "end": 184
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 184
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
    "value": "cjsi",
    "start": 31,
    "end": 35,
    "range": [
      31,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 36,
    "end": 40,
    "range": [
      36,
      40
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs/exclude/index\"",
    "start": 41,
    "end": 66,
    "range": [
      41,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 68,
    "end": 74,
    "range": [
      68,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 77,
    "end": 79,
    "range": [
      77,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 80,
    "end": 84,
    "range": [
      80,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/exclude/index\"",
    "start": 90,
    "end": 115,
    "range": [
      90,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 126,
    "end": 128,
    "range": [
      126,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/exclude/index\"",
    "start": 140,
    "end": 164,
    "range": [
      140,
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
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 166,
    "end": 170,
    "range": [
      166,
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
    "type": "Identifier",
    "value": "mjsi",
    "start": 172,
    "end": 176,
    "range": [
      172,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 178,
    "end": 183,
    "range": [
      178,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
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
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 35
          },
          "start": 26,
          "end": 35
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs/exclude/index",
        "raw": "\"inner/cjs/exclude/index\"",
        "start": 41,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 67
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
            "start": 80,
            "end": 84
          },
          "start": 75,
          "end": 84
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/exclude/index",
        "raw": "\"inner/mjs/exclude/index\"",
        "start": 90,
        "end": 115
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 68,
      "end": 116
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
            "start": 129,
            "end": 134
          },
          "start": 124,
          "end": 134
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/exclude/index",
        "raw": "\"inner/js/exclude/index\"",
        "start": 140,
        "end": 164
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 117,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 170
      },
      "directive": null,
      "start": 166,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 176
      },
      "directive": null,
      "start": 172,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 183
      },
      "directive": null,
      "start": 178,
      "end": 184
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 184
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
    "value": "cjsi",
    "start": 31,
    "end": 35,
    "range": [
      31,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 36,
    "end": 40,
    "range": [
      36,
      40
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs/exclude/index\"",
    "start": 41,
    "end": 66,
    "range": [
      41,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 68,
    "end": 74,
    "range": [
      68,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 77,
    "end": 79,
    "range": [
      77,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 80,
    "end": 84,
    "range": [
      80,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/exclude/index\"",
    "start": 90,
    "end": 115,
    "range": [
      90,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 126,
    "end": 128,
    "range": [
      126,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/exclude/index\"",
    "start": 140,
    "end": 164,
    "range": [
      140,
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
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 166,
    "end": 170,
    "range": [
      166,
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
    "type": "Identifier",
    "value": "mjsi",
    "start": 172,
    "end": 176,
    "range": [
      172,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 178,
    "end": 183,
    "range": [
      178,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
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
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 35
          },
          "start": 26,
          "end": 35
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs/exclude/index",
        "raw": "\"inner/cjs/exclude/index\"",
        "start": 41,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 67
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
            "start": 80,
            "end": 84
          },
          "start": 75,
          "end": 84
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/exclude/index",
        "raw": "\"inner/mjs/exclude/index\"",
        "start": 90,
        "end": 115
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 68,
      "end": 116
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
            "start": 129,
            "end": 134
          },
          "start": 124,
          "end": 134
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/exclude/index",
        "raw": "\"inner/js/exclude/index\"",
        "start": 140,
        "end": 164
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 117,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 170
      },
      "directive": null,
      "start": 166,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 176
      },
      "directive": null,
      "start": 172,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 183
      },
      "directive": null,
      "start": 178,
      "end": 184
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 184
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
    "value": "cjsi",
    "start": 31,
    "end": 35,
    "range": [
      31,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 36,
    "end": 40,
    "range": [
      36,
      40
    ]
  },
  {
    "type": "String",
    "value": "\"inner/cjs/exclude/index\"",
    "start": 41,
    "end": 66,
    "range": [
      41,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 68,
    "end": 74,
    "range": [
      68,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 77,
    "end": 79,
    "range": [
      77,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 80,
    "end": 84,
    "range": [
      80,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/exclude/index\"",
    "start": 90,
    "end": 115,
    "range": [
      90,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 126,
    "end": 128,
    "range": [
      126,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/exclude/index\"",
    "start": 140,
    "end": 164,
    "range": [
      140,
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
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 166,
    "end": 170,
    "range": [
      166,
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
    "type": "Identifier",
    "value": "mjsi",
    "start": 172,
    "end": 176,
    "range": [
      172,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 178,
    "end": 183,
    "range": [
      178,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
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
        "value": "inner/cjs/exclude/index",
        "raw": "\"inner/cjs/exclude/index\"",
        "start": 40,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 66
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
            "start": 79,
            "end": 82
          },
          "start": 74,
          "end": 82
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/exclude/index",
        "raw": "\"inner/mjs/exclude/index\"",
        "start": 88,
        "end": 113
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 114
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
            "start": 127,
            "end": 131
          },
          "start": 122,
          "end": 131
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/exclude/index",
        "raw": "\"inner/js/exclude/index\"",
        "start": 137,
        "end": 161
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 115,
      "end": 162
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
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "exportKind": "value",
          "start": 172,
          "end": 175
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 163,
      "end": 178
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
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "exportKind": "value",
          "start": 188,
          "end": 191
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 179,
      "end": 194
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "exportKind": "value",
          "start": 204,
          "end": 208
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 195,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 211
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
    "value": "\"inner/cjs/exclude/index\"",
    "start": 40,
    "end": 65,
    "range": [
      40,
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
    "value": "*",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 83,
    "end": 87,
    "range": [
      83,
      87
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/exclude/index\"",
    "start": 88,
    "end": 113,
    "range": [
      88,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 124,
    "end": 126,
    "range": [
      124,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 132,
    "end": 136,
    "range": [
      132,
      136
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/exclude/index\"",
    "start": 137,
    "end": 161,
    "range": [
      137,
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
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 172,
    "end": 175,
    "range": [
      172,
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
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 204,
    "end": 208,
    "range": [
      204,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
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
        "value": "inner/cjs/exclude/index",
        "raw": "\"inner/cjs/exclude/index\"",
        "start": 40,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 66
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
            "start": 79,
            "end": 82
          },
          "start": 74,
          "end": 82
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/exclude/index",
        "raw": "\"inner/mjs/exclude/index\"",
        "start": 88,
        "end": 113
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 114
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
            "start": 127,
            "end": 131
          },
          "start": 122,
          "end": 131
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/exclude/index",
        "raw": "\"inner/js/exclude/index\"",
        "start": 137,
        "end": 161
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 115,
      "end": 162
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
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "exportKind": "value",
          "start": 172,
          "end": 175
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 163,
      "end": 178
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
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "exportKind": "value",
          "start": 188,
          "end": 191
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 179,
      "end": 194
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "exportKind": "value",
          "start": 204,
          "end": 208
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 195,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 211
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
    "value": "\"inner/cjs/exclude/index\"",
    "start": 40,
    "end": 65,
    "range": [
      40,
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
    "value": "*",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 83,
    "end": 87,
    "range": [
      83,
      87
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/exclude/index\"",
    "start": 88,
    "end": 113,
    "range": [
      88,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 124,
    "end": 126,
    "range": [
      124,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 132,
    "end": 136,
    "range": [
      132,
      136
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/exclude/index\"",
    "start": 137,
    "end": 161,
    "range": [
      137,
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
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 172,
    "end": 175,
    "range": [
      172,
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
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 204,
    "end": 208,
    "range": [
      204,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
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
        "value": "inner/cjs/exclude/index",
        "raw": "\"inner/cjs/exclude/index\"",
        "start": 40,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 66
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
            "start": 79,
            "end": 82
          },
          "start": 74,
          "end": 82
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/exclude/index",
        "raw": "\"inner/mjs/exclude/index\"",
        "start": 88,
        "end": 113
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 114
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
            "start": 127,
            "end": 131
          },
          "start": 122,
          "end": 131
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/exclude/index",
        "raw": "\"inner/js/exclude/index\"",
        "start": 137,
        "end": 161
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 115,
      "end": 162
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
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "exportKind": "value",
          "start": 172,
          "end": 175
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 163,
      "end": 178
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
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "exportKind": "value",
          "start": 188,
          "end": 191
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 179,
      "end": 194
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "exportKind": "value",
          "start": 204,
          "end": 208
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 195,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 211
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
    "value": "\"inner/cjs/exclude/index\"",
    "start": 40,
    "end": 65,
    "range": [
      40,
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
    "value": "*",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 83,
    "end": 87,
    "range": [
      83,
      87
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/exclude/index\"",
    "start": 88,
    "end": 113,
    "range": [
      88,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 124,
    "end": 126,
    "range": [
      124,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 132,
    "end": 136,
    "range": [
      132,
      136
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/exclude/index\"",
    "start": 137,
    "end": 161,
    "range": [
      137,
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
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 172,
    "end": 175,
    "range": [
      172,
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
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 204,
    "end": 208,
    "range": [
      204,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  }
]
```
