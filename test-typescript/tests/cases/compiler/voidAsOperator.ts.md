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
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 22,
        "end": 27,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 4,
        "end": 20,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 4,
          "end": 11,
          "argument": {
            "type": "UnaryExpression",
            "start": 5,
            "end": 11,
            "argument": {
              "type": "Literal",
              "start": 10,
              "end": 11,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            },
            "operator": "void",
            "prefix": true
          },
          "operator": "!",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 16,
          "end": 20,
          "raw": "true",
          "value": true,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 39,
      "end": 64,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 59,
        "end": 64,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 43,
        "end": 57,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 43,
          "end": 48,
          "argument": {
            "type": "Literal",
            "start": 44,
            "end": 48,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          },
          "operator": "!",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 53,
          "end": 57,
          "raw": "true",
          "value": true,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
