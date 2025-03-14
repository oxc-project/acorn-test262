__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 18,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 18,
        "alternate": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "consequent": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "test": {
          "type": "BinaryExpression",
          "start": 0,
          "end": 10,
          "operator": "<",
          "left": {
            "type": "NewExpression",
            "start": 0,
            "end": 8,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 4,
              "end": 8,
              "decorators": [],
              "name": "Date",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
