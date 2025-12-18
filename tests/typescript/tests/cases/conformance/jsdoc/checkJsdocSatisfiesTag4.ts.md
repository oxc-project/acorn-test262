__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 97,
        "end": 99
      },
      "exportKind": "value",
      "start": 57,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 102
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 64,
    "end": 71,
    "range": [
      64,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
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
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 103,
              "end": 104
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 100,
            "end": 104
          }
        ],
        "start": 98,
        "end": 106
      },
      "exportKind": "value",
      "start": 58,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 58,
  "end": 108
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 58,
    "end": 64,
    "range": [
      58,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 65,
    "end": 72,
    "range": [
      65,
      72
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
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  }
]
```
