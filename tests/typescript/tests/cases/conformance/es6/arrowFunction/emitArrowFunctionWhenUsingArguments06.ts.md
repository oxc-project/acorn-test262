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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 20
        }
      ],
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 57
                    },
                    "id": null,
                    "generator": false,
                    "start": 42,
                    "end": 57
                  },
                  "id": null,
                  "generator": false,
                  "start": 36,
                  "end": 57
                },
                "definite": false,
                "start": 32,
                "end": 57
              }
            ],
            "declare": false,
            "start": 28,
            "end": 58
          }
        ],
        "start": 22,
        "end": 60
      },
      "expression": false,
      "start": 0,
      "end": 60
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 60
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
    "value": "f",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 11,
    "end": 20,
    "range": [
      11,
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
    "type": "Keyword",
    "value": "var",
    "start": 28,
    "end": 31,
    "range": [
      28,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
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
    "value": ")",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 45,
    "end": 47,
    "range": [
      45,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 48,
    "end": 57,
    "range": [
      48,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  }
]
```
