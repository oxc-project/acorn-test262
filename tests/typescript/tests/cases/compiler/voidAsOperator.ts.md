__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 10,
              "end": 11
            },
            "prefix": true,
            "start": 5,
            "end": 11
          },
          "prefix": true,
          "start": 4,
          "end": 11
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 16,
          "end": 20
        },
        "start": 4,
        "end": 20
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 22,
        "end": 27
      },
      "alternate": null,
      "start": 0,
      "end": 27
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 44,
            "end": 48
          },
          "prefix": true,
          "start": 43,
          "end": 48
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 53,
          "end": 57
        },
        "start": 43,
        "end": 57
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 64
      },
      "alternate": null,
      "start": 39,
      "end": 64
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
