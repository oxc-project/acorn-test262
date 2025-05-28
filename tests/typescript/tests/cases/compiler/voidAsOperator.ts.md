__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 27,
      "test": {
        "type": "BinaryExpression",
        "start": 4,
        "end": 20,
        "left": {
          "type": "UnaryExpression",
          "start": 4,
          "end": 11,
          "operator": "!",
          "argument": {
            "type": "UnaryExpression",
            "start": 5,
            "end": 11,
            "operator": "void",
            "argument": {
              "type": "Literal",
              "start": 10,
              "end": 11,
              "value": 0,
              "raw": "0"
            },
            "prefix": true
          },
          "prefix": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 16,
          "end": 20,
          "value": true,
          "raw": "true"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 22,
        "end": 27,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 39,
      "end": 64,
      "test": {
        "type": "BinaryExpression",
        "start": 43,
        "end": 57,
        "left": {
          "type": "UnaryExpression",
          "start": 43,
          "end": 48,
          "operator": "!",
          "argument": {
            "type": "Literal",
            "start": 44,
            "end": 48,
            "value": null,
            "raw": "null"
          },
          "prefix": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 53,
          "end": 57,
          "value": true,
          "raw": "true"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 59,
        "end": 64,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
