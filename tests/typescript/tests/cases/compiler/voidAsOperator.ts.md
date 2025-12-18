__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 10,
              "end": 11
            },
            "prefix": true,
            "start": 5,
            "end": 11
          },
          "prefix": true,
          "start": 4,
          "end": 11
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 16,
          "end": 20
        },
        "start": 4,
        "end": 20
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 22,
        "end": 27
      },
      "alternate": null,
      "start": 0,
      "end": 27
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 44,
            "end": 48
          },
          "prefix": true,
          "start": 43,
          "end": 48
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 53,
          "end": 57
        },
        "start": 43,
        "end": 57
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 64
      },
      "alternate": null,
      "start": 39,
      "end": 64
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2,
    "range": [
      0,
      2
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4,
    "range": [
      3,
      4
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5,
    "end": 9,
    "range": [
      5,
      9
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  }
]
```
