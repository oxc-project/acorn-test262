__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 6
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null,
          "start": 8,
          "end": 14
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 23,
            "end": 27
          },
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 29,
            "end": 32
          },
          "start": 16,
          "end": 32
        },
        "start": 8,
        "end": 32
      },
      "start": 0,
      "end": 32
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "target",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 16,
    "end": 21,
    "range": [
      16,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 23,
    "end": 27,
    "range": [
      23,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  }
]
```
