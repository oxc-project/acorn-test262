__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 97
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 105
          },
          "optional": false,
          "computed": false,
          "start": 91,
          "end": 105
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "loader",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 123
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 131
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 133,
            "end": 135
          },
          "expression": false,
          "start": 108,
          "end": 135
        },
        "start": 91,
        "end": 135
      },
      "directive": null,
      "start": 91,
      "end": 135
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 91,
  "end": 135
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 98,
    "end": 105,
    "range": [
      98,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116,
    "range": [
      108,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "loader",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 124,
    "end": 131,
    "range": [
      124,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  }
]
```
