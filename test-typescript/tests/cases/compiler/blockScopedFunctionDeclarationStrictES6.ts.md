__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "IfStatement",
      "start": 14,
      "end": 130,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 24,
        "end": 130,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 30,
            "end": 48,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 45,
              "end": 48,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 102,
            "expression": {
              "type": "CallExpression",
              "start": 96,
              "end": 101,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 96,
                "end": 99,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 18,
        "end": 22,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 136,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 131,
          "end": 134,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
