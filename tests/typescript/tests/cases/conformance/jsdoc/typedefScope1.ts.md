__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "ok1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 79
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 82,
                  "end": 83
                },
                "definite": false,
                "start": 76,
                "end": 83
              }
            ],
            "declare": false,
            "start": 72,
            "end": 84
          }
        ],
        "start": 14,
        "end": 86
      },
      "expression": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "ok2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 167
                },
                "init": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "'hi'",
                  "start": 170,
                  "end": 174
                },
                "definite": false,
                "start": 164,
                "end": 174
              }
            ],
            "declare": false,
            "start": 160,
            "end": 175
          }
        ],
        "start": 102,
        "end": 177
      },
      "expression": false,
      "start": 88,
      "end": 177
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
            "name": "notOK",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 205
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 208,
            "end": 209
          },
          "definite": false,
          "start": 200,
          "end": 209
        }
      ],
      "declare": false,
      "start": 196,
      "end": 210
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 210
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 72,
    "end": 75,
    "range": [
      72,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "ok1",
    "start": 76,
    "end": 79,
    "range": [
      76,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96,
    "range": [
      88,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "ok2",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 170,
    "end": 174,
    "range": [
      170,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 196,
    "end": 199,
    "range": [
      196,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "notOK",
    "start": 200,
    "end": 205,
    "range": [
      200,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  }
]
```
