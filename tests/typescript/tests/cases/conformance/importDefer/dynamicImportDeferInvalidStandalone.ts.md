__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MetaProperty",
        "meta": {
          "type": "Identifier",
          "decorators": [],
          "name": "import",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 6
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "defer",
          "optional": false,
          "typeAnnotation": null,
          "start": 7,
          "end": 12
        },
        "start": 0,
        "end": 12
      },
      "directive": null,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MetaProperty",
          "meta": {
            "type": "Identifier",
            "decorators": [],
            "name": "import",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defer",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 28
          },
          "start": 16,
          "end": 28
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 30,
            "end": 33
          }
        ],
        "optional": false,
        "start": 15,
        "end": 34
      },
      "directive": null,
      "start": 15,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Function",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 45
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MetaProperty",
            "meta": {
              "type": "Identifier",
              "decorators": [],
              "name": "import",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 52
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "defer",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 58
            },
            "start": 46,
            "end": 58
          }
        ],
        "optional": false,
        "start": 37,
        "end": 59
      },
      "directive": null,
      "start": 37,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MetaProperty",
        "meta": {
          "type": "Identifier",
          "decorators": [],
          "name": "import",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 68
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "defer",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 74
        },
        "start": 62,
        "end": 74
      },
      "directive": null,
      "start": 62,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
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
    "value": ".",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "defer",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 16,
    "end": 22,
    "range": [
      16,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "defer",
    "start": 23,
    "end": 28,
    "range": [
      23,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 30,
    "end": 33,
    "range": [
      30,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34,
    "range": [
      33,
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
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 37,
    "end": 45,
    "range": [
      37,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
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
    "value": ".",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "defer",
    "start": 53,
    "end": 58,
    "range": [
      53,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "defer",
    "start": 69,
    "end": 74,
    "range": [
      69,
      74
    ]
  }
]
```
