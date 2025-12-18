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
              "name": "indirect1",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 25,
              "end": 26
            },
            "definite": false,
            "start": 13,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 28
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
    "value": "const",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "indirect1",
    "start": 13,
    "end": 22,
    "range": [
      13,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
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
              "name": "indirect2",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 25,
              "end": 26
            },
            "definite": false,
            "start": 13,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 28
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
    "value": "const",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "indirect2",
    "start": 13,
    "end": 22,
    "range": [
      13,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
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
            "name": "indirect1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#indirect1",
        "raw": "\"#indirect1\"",
        "start": 26,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect2",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect2",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 58
          },
          "importKind": "value",
          "start": 49,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg/indirect2.js",
        "raw": "\"pkg/indirect2.js\"",
        "start": 66,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 97
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 97
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect1",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 107
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "indirect2",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 118
          }
        ],
        "optional": false,
        "start": 86,
        "end": 119
      },
      "directive": null,
      "start": 86,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 120
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
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "indirect1",
    "start": 9,
    "end": 18,
    "range": [
      9,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "String",
    "value": "\"#indirect1\"",
    "start": 26,
    "end": 38,
    "range": [
      26,
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
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "indirect2",
    "start": 49,
    "end": 58,
    "range": [
      49,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 61,
    "end": 65,
    "range": [
      61,
      65
    ]
  },
  {
    "type": "String",
    "value": "\"pkg/indirect2.js\"",
    "start": 66,
    "end": 84,
    "range": [
      66,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 86,
    "end": 93,
    "range": [
      86,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "indirect1",
    "start": 98,
    "end": 107,
    "range": [
      98,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "indirect2",
    "start": 109,
    "end": 118,
    "range": [
      109,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  }
]
```
