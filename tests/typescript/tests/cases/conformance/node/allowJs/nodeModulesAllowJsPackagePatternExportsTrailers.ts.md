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
        "value": "inner/cjs/index.cjs",
        "raw": "\"inner/cjs/index.cjs\"",
        "start": 41,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 63
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
            "start": 76,
            "end": 80
          },
          "start": 71,
          "end": 80
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index.mjs",
        "raw": "\"inner/mjs/index.mjs\"",
        "start": 86,
        "end": 107
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 108
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
            "start": 121,
            "end": 126
          },
          "start": 116,
          "end": 126
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index.js",
        "raw": "\"inner/js/index.js\"",
        "start": 132,
        "end": 151
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 109,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 157
      },
      "directive": null,
      "start": 153,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 163
      },
      "directive": null,
      "start": 159,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 170
      },
      "directive": null,
      "start": 165,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 171
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
    "value": "\"inner/cjs/index.cjs\"",
    "start": 41,
    "end": 62,
    "range": [
      41,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 73,
    "end": 75,
    "range": [
      73,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index.mjs\"",
    "start": 86,
    "end": 107,
    "range": [
      86,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 118,
    "end": 120,
    "range": [
      118,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index.js\"",
    "start": 132,
    "end": 151,
    "range": [
      132,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
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
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 159,
    "end": 163,
    "range": [
      159,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 165,
    "end": 170,
    "range": [
      165,
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
        "value": "inner/cjs/index.cjs",
        "raw": "\"inner/cjs/index.cjs\"",
        "start": 41,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 63
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
            "start": 76,
            "end": 80
          },
          "start": 71,
          "end": 80
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index.mjs",
        "raw": "\"inner/mjs/index.mjs\"",
        "start": 86,
        "end": 107
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 108
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
            "start": 121,
            "end": 126
          },
          "start": 116,
          "end": 126
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index.js",
        "raw": "\"inner/js/index.js\"",
        "start": 132,
        "end": 151
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 109,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 157
      },
      "directive": null,
      "start": 153,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 163
      },
      "directive": null,
      "start": 159,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 170
      },
      "directive": null,
      "start": 165,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 171
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
    "value": "\"inner/cjs/index.cjs\"",
    "start": 41,
    "end": 62,
    "range": [
      41,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 73,
    "end": 75,
    "range": [
      73,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index.mjs\"",
    "start": 86,
    "end": 107,
    "range": [
      86,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 118,
    "end": 120,
    "range": [
      118,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index.js\"",
    "start": 132,
    "end": 151,
    "range": [
      132,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
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
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 159,
    "end": 163,
    "range": [
      159,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 165,
    "end": 170,
    "range": [
      165,
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
        "value": "inner/cjs/index.cjs",
        "raw": "\"inner/cjs/index.cjs\"",
        "start": 41,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 63
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
            "start": 76,
            "end": 80
          },
          "start": 71,
          "end": 80
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index.mjs",
        "raw": "\"inner/mjs/index.mjs\"",
        "start": 86,
        "end": 107
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 108
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
            "start": 121,
            "end": 126
          },
          "start": 116,
          "end": 126
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index.js",
        "raw": "\"inner/js/index.js\"",
        "start": 132,
        "end": 151
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 109,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 157
      },
      "directive": null,
      "start": 153,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 163
      },
      "directive": null,
      "start": 159,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 170
      },
      "directive": null,
      "start": 165,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 171
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
    "value": "\"inner/cjs/index.cjs\"",
    "start": 41,
    "end": 62,
    "range": [
      41,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 73,
    "end": 75,
    "range": [
      73,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index.mjs\"",
    "start": 86,
    "end": 107,
    "range": [
      86,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 118,
    "end": 120,
    "range": [
      118,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index.js\"",
    "start": 132,
    "end": 151,
    "range": [
      132,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
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
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 159,
    "end": 163,
    "range": [
      159,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 165,
    "end": 170,
    "range": [
      165,
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "implicitCjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 49
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 52,
              "end": 56
            },
            "definite": false,
            "start": 32,
            "end": 56
          }
        ],
        "declare": false,
        "start": 26,
        "end": 57
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 57
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31,
    "range": [
      26,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "implicitCjsSource",
    "start": 32,
    "end": 49,
    "range": [
      32,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 52,
    "end": 56,
    "range": [
      52,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
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
        "value": "inner/cjs/index.cjs",
        "raw": "\"inner/cjs/index.cjs\"",
        "start": 40,
        "end": 61
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 62
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
            "start": 75,
            "end": 78
          },
          "start": 70,
          "end": 78
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index.mjs",
        "raw": "\"inner/mjs/index.mjs\"",
        "start": 84,
        "end": 105
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 63,
      "end": 106
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
            "start": 119,
            "end": 123
          },
          "start": 114,
          "end": 123
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index.js",
        "raw": "\"inner/js/index.js\"",
        "start": 129,
        "end": 148
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 107,
      "end": 149
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
            "start": 159,
            "end": 162
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 162
          },
          "exportKind": "value",
          "start": 159,
          "end": 162
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 165
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
            "start": 175,
            "end": 178
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 178
          },
          "exportKind": "value",
          "start": 175,
          "end": 178
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 166,
      "end": 181
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
            "start": 191,
            "end": 195
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 195
          },
          "exportKind": "value",
          "start": 191,
          "end": 195
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 182,
      "end": 198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 198
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
    "value": "\"inner/cjs/index.cjs\"",
    "start": 40,
    "end": 61,
    "range": [
      40,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index.mjs\"",
    "start": 84,
    "end": 105,
    "range": [
      84,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 107,
    "end": 113,
    "range": [
      107,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 116,
    "end": 118,
    "range": [
      116,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123,
    "range": [
      119,
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
    "value": "\"inner/js/index.js\"",
    "start": 129,
    "end": 148,
    "range": [
      129,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164,
    "range": [
      163,
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
    "type": "Keyword",
    "value": "export",
    "start": 166,
    "end": 172,
    "range": [
      166,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 182,
    "end": 188,
    "range": [
      182,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 191,
    "end": 195,
    "range": [
      191,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 41
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 44,
              "end": 48
            },
            "definite": false,
            "start": 32,
            "end": 48
          }
        ],
        "declare": false,
        "start": 26,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31,
    "range": [
      26,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 32,
    "end": 41,
    "range": [
      32,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
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
        "value": "inner/cjs/index.cjs",
        "raw": "\"inner/cjs/index.cjs\"",
        "start": 40,
        "end": 61
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 62
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
            "start": 75,
            "end": 78
          },
          "start": 70,
          "end": 78
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index.mjs",
        "raw": "\"inner/mjs/index.mjs\"",
        "start": 84,
        "end": 105
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 63,
      "end": 106
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
            "start": 119,
            "end": 123
          },
          "start": 114,
          "end": 123
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index.js",
        "raw": "\"inner/js/index.js\"",
        "start": 129,
        "end": 148
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 107,
      "end": 149
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
            "start": 159,
            "end": 162
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 162
          },
          "exportKind": "value",
          "start": 159,
          "end": 162
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 165
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
            "start": 175,
            "end": 178
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 178
          },
          "exportKind": "value",
          "start": 175,
          "end": 178
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 166,
      "end": 181
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
            "start": 191,
            "end": 195
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 195
          },
          "exportKind": "value",
          "start": 191,
          "end": 195
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 182,
      "end": 198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 198
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
    "value": "\"inner/cjs/index.cjs\"",
    "start": 40,
    "end": 61,
    "range": [
      40,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index.mjs\"",
    "start": 84,
    "end": 105,
    "range": [
      84,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 107,
    "end": 113,
    "range": [
      107,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 116,
    "end": 118,
    "range": [
      116,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123,
    "range": [
      119,
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
    "value": "\"inner/js/index.js\"",
    "start": 129,
    "end": 148,
    "range": [
      129,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164,
    "range": [
      163,
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
    "type": "Keyword",
    "value": "export",
    "start": 166,
    "end": 172,
    "range": [
      166,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 182,
    "end": 188,
    "range": [
      182,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 191,
    "end": 195,
    "range": [
      191,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 41
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 44,
              "end": 48
            },
            "definite": false,
            "start": 32,
            "end": 48
          }
        ],
        "declare": false,
        "start": 26,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31,
    "range": [
      26,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsSource",
    "start": 32,
    "end": 41,
    "range": [
      32,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
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
        "value": "inner/cjs/index.cjs",
        "raw": "\"inner/cjs/index.cjs\"",
        "start": 40,
        "end": 61
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 62
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
            "start": 75,
            "end": 78
          },
          "start": 70,
          "end": 78
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index.mjs",
        "raw": "\"inner/mjs/index.mjs\"",
        "start": 84,
        "end": 105
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 63,
      "end": 106
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
            "start": 119,
            "end": 123
          },
          "start": 114,
          "end": 123
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index.js",
        "raw": "\"inner/js/index.js\"",
        "start": 129,
        "end": 148
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 107,
      "end": 149
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
            "start": 159,
            "end": 162
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 162
          },
          "exportKind": "value",
          "start": 159,
          "end": 162
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 165
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
            "start": 175,
            "end": 178
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 178
          },
          "exportKind": "value",
          "start": 175,
          "end": 178
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 166,
      "end": 181
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
            "start": 191,
            "end": 195
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 195
          },
          "exportKind": "value",
          "start": 191,
          "end": 195
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 182,
      "end": 198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 198
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
    "value": "\"inner/cjs/index.cjs\"",
    "start": 40,
    "end": 61,
    "range": [
      40,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index.mjs\"",
    "start": 84,
    "end": 105,
    "range": [
      84,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 107,
    "end": 113,
    "range": [
      107,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 116,
    "end": 118,
    "range": [
      116,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123,
    "range": [
      119,
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
    "value": "\"inner/js/index.js\"",
    "start": 129,
    "end": 148,
    "range": [
      129,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164,
    "range": [
      163,
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
    "type": "Keyword",
    "value": "export",
    "start": 166,
    "end": 172,
    "range": [
      166,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 182,
    "end": 188,
    "range": [
      182,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 191,
    "end": 195,
    "range": [
      191,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  }
]
```
