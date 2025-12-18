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
        "value": "inner/cjs/index",
        "raw": "\"inner/cjs/index\"",
        "start": 41,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 59
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
            "start": 72,
            "end": 76
          },
          "start": 67,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index",
        "raw": "\"inner/mjs/index\"",
        "start": 82,
        "end": 99
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 60,
      "end": 100
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
            "start": 113,
            "end": 118
          },
          "start": 108,
          "end": 118
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index",
        "raw": "\"inner/js/index\"",
        "start": 124,
        "end": 140
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 101,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
      },
      "directive": null,
      "start": 142,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 152
      },
      "directive": null,
      "start": 148,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 159
      },
      "directive": null,
      "start": 154,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 160
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
    "value": "\"inner/cjs/index\"",
    "start": 41,
    "end": 58,
    "range": [
      41,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 69,
    "end": 71,
    "range": [
      69,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 72,
    "end": 76,
    "range": [
      72,
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
    "value": "\"inner/mjs/index\"",
    "start": 82,
    "end": 99,
    "range": [
      82,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 113,
    "end": 118,
    "range": [
      113,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 119,
    "end": 123,
    "range": [
      119,
      123
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index\"",
    "start": 124,
    "end": 140,
    "range": [
      124,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 148,
    "end": 152,
    "range": [
      148,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 154,
    "end": 159,
    "range": [
      154,
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
        "value": "inner/cjs/index",
        "raw": "\"inner/cjs/index\"",
        "start": 41,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 59
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
            "start": 72,
            "end": 76
          },
          "start": 67,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index",
        "raw": "\"inner/mjs/index\"",
        "start": 82,
        "end": 99
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 60,
      "end": 100
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
            "start": 113,
            "end": 118
          },
          "start": 108,
          "end": 118
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index",
        "raw": "\"inner/js/index\"",
        "start": 124,
        "end": 140
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 101,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
      },
      "directive": null,
      "start": 142,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 152
      },
      "directive": null,
      "start": 148,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 159
      },
      "directive": null,
      "start": 154,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 160
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
    "value": "\"inner/cjs/index\"",
    "start": 41,
    "end": 58,
    "range": [
      41,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 69,
    "end": 71,
    "range": [
      69,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 72,
    "end": 76,
    "range": [
      72,
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
    "value": "\"inner/mjs/index\"",
    "start": 82,
    "end": 99,
    "range": [
      82,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 113,
    "end": 118,
    "range": [
      113,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 119,
    "end": 123,
    "range": [
      119,
      123
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index\"",
    "start": 124,
    "end": 140,
    "range": [
      124,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 148,
    "end": 152,
    "range": [
      148,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 154,
    "end": 159,
    "range": [
      154,
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
        "value": "inner/cjs/index",
        "raw": "\"inner/cjs/index\"",
        "start": 41,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 59
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
            "start": 72,
            "end": 76
          },
          "start": 67,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index",
        "raw": "\"inner/mjs/index\"",
        "start": 82,
        "end": 99
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 60,
      "end": 100
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
            "start": 113,
            "end": 118
          },
          "start": 108,
          "end": 118
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index",
        "raw": "\"inner/js/index\"",
        "start": 124,
        "end": 140
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 101,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
      },
      "directive": null,
      "start": 142,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 152
      },
      "directive": null,
      "start": 148,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 159
      },
      "directive": null,
      "start": 154,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 160
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
    "value": "\"inner/cjs/index\"",
    "start": 41,
    "end": 58,
    "range": [
      41,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 69,
    "end": 71,
    "range": [
      69,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 72,
    "end": 76,
    "range": [
      72,
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
    "value": "\"inner/mjs/index\"",
    "start": 82,
    "end": 99,
    "range": [
      82,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 113,
    "end": 118,
    "range": [
      113,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 119,
    "end": 123,
    "range": [
      119,
      123
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index\"",
    "start": 124,
    "end": 140,
    "range": [
      124,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 148,
    "end": 152,
    "range": [
      148,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 154,
    "end": 159,
    "range": [
      154,
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
        "value": "inner/cjs/index",
        "raw": "\"inner/cjs/index\"",
        "start": 40,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 58
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
            "start": 71,
            "end": 74
          },
          "start": 66,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index",
        "raw": "\"inner/mjs/index\"",
        "start": 80,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 98
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
            "start": 111,
            "end": 115
          },
          "start": 106,
          "end": 115
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index",
        "raw": "\"inner/js/index\"",
        "start": 121,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 138
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
            "start": 148,
            "end": 151
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 151
          },
          "exportKind": "value",
          "start": 148,
          "end": 151
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 154
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
            "start": 164,
            "end": 167
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 167
          },
          "exportKind": "value",
          "start": 164,
          "end": 167
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 155,
      "end": 170
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
            "start": 180,
            "end": 184
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 184
          },
          "exportKind": "value",
          "start": 180,
          "end": 184
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 187
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
    "value": "\"inner/cjs/index\"",
    "start": 40,
    "end": 57,
    "range": [
      40,
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
    "value": "*",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 68,
    "end": 70,
    "range": [
      68,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79,
    "range": [
      75,
      79
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index\"",
    "start": 80,
    "end": 97,
    "range": [
      80,
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
    "value": "*",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 111,
    "end": 115,
    "range": [
      111,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 116,
    "end": 120,
    "range": [
      116,
      120
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index\"",
    "start": 121,
    "end": 137,
    "range": [
      121,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 155,
    "end": 161,
    "range": [
      155,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177,
    "range": [
      171,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 180,
    "end": 184,
    "range": [
      180,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
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
        "value": "inner/cjs/index",
        "raw": "\"inner/cjs/index\"",
        "start": 40,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 58
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
            "start": 71,
            "end": 74
          },
          "start": 66,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index",
        "raw": "\"inner/mjs/index\"",
        "start": 80,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 98
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
            "start": 111,
            "end": 115
          },
          "start": 106,
          "end": 115
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index",
        "raw": "\"inner/js/index\"",
        "start": 121,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 138
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
            "start": 148,
            "end": 151
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 151
          },
          "exportKind": "value",
          "start": 148,
          "end": 151
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 154
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
            "start": 164,
            "end": 167
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 167
          },
          "exportKind": "value",
          "start": 164,
          "end": 167
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 155,
      "end": 170
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
            "start": 180,
            "end": 184
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 184
          },
          "exportKind": "value",
          "start": 180,
          "end": 184
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 187
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
    "value": "\"inner/cjs/index\"",
    "start": 40,
    "end": 57,
    "range": [
      40,
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
    "value": "*",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 68,
    "end": 70,
    "range": [
      68,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79,
    "range": [
      75,
      79
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index\"",
    "start": 80,
    "end": 97,
    "range": [
      80,
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
    "value": "*",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 111,
    "end": 115,
    "range": [
      111,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 116,
    "end": 120,
    "range": [
      116,
      120
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index\"",
    "start": 121,
    "end": 137,
    "range": [
      121,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 155,
    "end": 161,
    "range": [
      155,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177,
    "range": [
      171,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 180,
    "end": 184,
    "range": [
      180,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
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
        "value": "inner/cjs/index",
        "raw": "\"inner/cjs/index\"",
        "start": 40,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 58
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
            "start": 71,
            "end": 74
          },
          "start": 66,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs/index",
        "raw": "\"inner/mjs/index\"",
        "start": 80,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 98
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
            "start": 111,
            "end": 115
          },
          "start": 106,
          "end": 115
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/js/index",
        "raw": "\"inner/js/index\"",
        "start": 121,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 138
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
            "start": 148,
            "end": 151
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 151
          },
          "exportKind": "value",
          "start": 148,
          "end": 151
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 154
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
            "start": 164,
            "end": 167
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 167
          },
          "exportKind": "value",
          "start": 164,
          "end": 167
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 155,
      "end": 170
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
            "start": 180,
            "end": 184
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 184
          },
          "exportKind": "value",
          "start": 180,
          "end": 184
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 187
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
    "value": "\"inner/cjs/index\"",
    "start": 40,
    "end": 57,
    "range": [
      40,
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
    "value": "*",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 68,
    "end": 70,
    "range": [
      68,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79,
    "range": [
      75,
      79
    ]
  },
  {
    "type": "String",
    "value": "\"inner/mjs/index\"",
    "start": 80,
    "end": 97,
    "range": [
      80,
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
    "value": "*",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 111,
    "end": 115,
    "range": [
      111,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 116,
    "end": 120,
    "range": [
      116,
      120
    ]
  },
  {
    "type": "String",
    "value": "\"inner/js/index\"",
    "start": 121,
    "end": 137,
    "range": [
      121,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 155,
    "end": 161,
    "range": [
      155,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177,
    "range": [
      171,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 180,
    "end": 184,
    "range": [
      180,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  }
]
```
