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
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 73
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 73
          },
          "importKind": "value",
          "start": 68,
          "end": 73
        }
      ],
      "source": {
        "type": "Literal",
        "value": "non-existent-module",
        "raw": "\"non-existent-module\"",
        "start": 81,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 104,
        "end": 111
      },
      "directive": null,
      "start": 104,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 59,
  "end": 111
}
```
__ESTREE_TEST__:TOKENS:
```json
[
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
    "value": "{",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 68,
    "end": 73,
    "range": [
      68,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "String",
    "value": "\"non-existent-module\"",
    "start": 81,
    "end": 102,
    "range": [
      81,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 104,
    "end": 109,
    "range": [
      104,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  }
]
```
