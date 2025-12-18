__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ForOfStatement",
          "await": false,
          "left": {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "of",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 80
                },
                "init": null,
                "definite": false,
                "start": 78,
                "end": 80
              }
            ],
            "declare": false,
            "start": 66,
            "end": 80
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "of",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 86
          },
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 88,
            "end": 90
          },
          "start": 61,
          "end": 90
        },
        {
          "type": "EmptyStatement",
          "start": 90,
          "end": 91
        }
      ],
      "start": 57,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 93
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 66,
    "end": 71,
    "range": [
      66,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 72,
    "end": 77,
    "range": [
      72,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 78,
    "end": 80,
    "range": [
      78,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 81,
    "end": 83,
    "range": [
      81,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 84,
    "end": 86,
    "range": [
      84,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  }
]
```
