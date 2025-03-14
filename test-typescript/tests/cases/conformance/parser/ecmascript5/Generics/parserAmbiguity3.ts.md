__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 19,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 18,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 2,
            "end": 7,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 2,
              "end": 3,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 6,
              "end": 7,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 9,
            "end": 17,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 13,
              "end": 17,
              "argument": {
                "type": "Literal",
                "start": 15,
                "end": 16,
                "raw": "7",
                "value": 7
              },
              "operator": "+",
              "prefix": true
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "decorators": [],
          "name": "f",
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
