__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 25,
            "end": 29
          },
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 56,
            "end": 60
          },
          "definite": false,
          "start": 35,
          "end": 60
        }
      ],
      "declare": false,
      "start": 31,
      "end": 61
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 87,
            "end": 91
          },
          "definite": false,
          "start": 83,
          "end": 91
        }
      ],
      "declare": false,
      "start": 62,
      "end": 92
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 128,
            "end": 132
          },
          "definite": false,
          "start": 110,
          "end": 132
        }
      ],
      "declare": false,
      "start": 106,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 25,
    "end": 29,
    "range": [
      25,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 87,
    "end": 91,
    "range": [
      87,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109,
    "range": [
      106,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 128,
    "end": 132,
    "range": [
      128,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  }
]
```
