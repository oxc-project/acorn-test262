__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 7,
        "end": 8
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 18,
            "end": 19
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 22,
              "end": 28
            }
          ],
          "start": 13,
          "end": 28
        }
      ],
      "start": 0,
      "end": 30
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "switch",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
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
    "type": "Numeric",
    "value": "0",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 13,
    "end": 17,
    "range": [
      13,
      17
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 22,
    "end": 27,
    "range": [
      22,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  }
]
```
