__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 7,
        "end": 11
      },
      "body": {
        "type": "ContinueStatement",
        "label": null,
        "start": 13,
        "end": 21
      },
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "while",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 13,
    "end": 21,
    "range": [
      13,
      21
    ]
  }
]
```
