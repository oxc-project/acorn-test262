__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
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
    "value": "var",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 15,
    "end": 17,
    "range": [
      15,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
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
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 28
          },
          "start": 7,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "start": 34,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 76
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nameSpaceBinding",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 104
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 105,
        "end": 108
      },
      "declare": false,
      "start": 78,
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
            "name": "nameSpaceBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 160
          },
          "start": 138,
          "end": 160
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "start": 166,
        "end": 207
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 131,
      "end": 208
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 257
          },
          "start": 235,
          "end": 257
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "start": 263,
        "end": 304
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 228,
      "end": 305
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 355
          },
          "start": 333,
          "end": 355
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "start": 361,
        "end": 402
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 326,
      "end": 403
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 444
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 447,
            "end": 449
          },
          "definite": false,
          "start": 427,
          "end": 449
        }
      ],
      "declare": false,
      "start": 423,
      "end": 450
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 450
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
    "value": "nameSpaceBinding",
    "start": 12,
    "end": 28,
    "range": [
      12,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 29,
    "end": 33,
    "range": [
      29,
      33
    ]
  },
  {
    "type": "String",
    "value": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
    "start": 34,
    "end": 75,
    "range": [
      34,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 78,
    "end": 87,
    "range": [
      78,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 88,
    "end": 104,
    "range": [
      88,
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
    "type": "Keyword",
    "value": "import",
    "start": 131,
    "end": 137,
    "range": [
      131,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding1",
    "start": 143,
    "end": 160,
    "range": [
      143,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 161,
    "end": 165,
    "range": [
      161,
      165
    ]
  },
  {
    "type": "String",
    "value": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
    "start": 166,
    "end": 207,
    "range": [
      166,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 228,
    "end": 234,
    "range": [
      228,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 237,
    "end": 239,
    "range": [
      237,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding1",
    "start": 240,
    "end": 257,
    "range": [
      240,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 258,
    "end": 262,
    "range": [
      258,
      262
    ]
  },
  {
    "type": "String",
    "value": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
    "start": 263,
    "end": 304,
    "range": [
      263,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 335,
    "end": 337,
    "range": [
      335,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding3",
    "start": 338,
    "end": 355,
    "range": [
      338,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 356,
    "end": 360,
    "range": [
      356,
      360
    ]
  },
  {
    "type": "String",
    "value": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
    "start": 361,
    "end": 402,
    "range": [
      361,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 423,
    "end": 426,
    "range": [
      423,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding3",
    "start": 427,
    "end": 444,
    "range": [
      427,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 447,
    "end": 449,
    "range": [
      447,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  }
]
```
