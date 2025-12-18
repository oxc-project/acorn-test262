__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Atomics",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pause",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 13
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 0,
        "end": 15
      },
      "directive": null,
      "start": 0,
      "end": 16
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
            "name": "Atomics",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 24
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pause",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 30
          },
          "optional": false,
          "computed": false,
          "start": 17,
          "end": 30
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 31,
            "end": 32
          }
        ],
        "optional": false,
        "start": 17,
        "end": 33
      },
      "directive": null,
      "start": 17,
      "end": 34
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 34
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Atomics",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "pause",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Atomics",
    "start": 17,
    "end": 24,
    "range": [
      17,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "pause",
    "start": 25,
    "end": 30,
    "range": [
      25,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  }
]
```
