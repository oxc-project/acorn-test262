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
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 15,
          "end": 19
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 31
              },
              "body": {
                "type": "WhileStatement",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 42,
                  "end": 46
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 48,
                  "end": 53
                },
                "start": 35,
                "end": 53
              },
              "start": 25,
              "end": 53
            }
          ],
          "start": 21,
          "end": 55
        },
        "start": 8,
        "end": 55
      },
      "start": 0,
      "end": 55
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 55
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
    "type": "Keyword",
    "value": "while",
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
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 15,
    "end": 19,
    "range": [
      15,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 35,
    "end": 40,
    "range": [
      35,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  }
]
```
