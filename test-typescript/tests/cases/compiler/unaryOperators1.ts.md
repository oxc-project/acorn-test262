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
      "end": 5,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 0,
        "end": 4,
        "argument": {
          "type": "Identifier",
          "start": 1,
          "end": 4,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "+",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 6,
      "end": 11,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 6,
        "end": 10,
        "argument": {
          "type": "Identifier",
          "start": 7,
          "end": 10,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 18,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 12,
        "end": 17,
        "argument": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "decorators": [],
          "name": "quux",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "~",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
