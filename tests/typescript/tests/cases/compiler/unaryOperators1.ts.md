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
      "expression": {
        "type": "UnaryExpression",
        "start": 0,
        "end": 4,
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "start": 1,
          "end": 4,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6,
      "end": 11,
      "expression": {
        "type": "UnaryExpression",
        "start": 6,
        "end": 10,
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "start": 7,
          "end": 10,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 18,
      "expression": {
        "type": "UnaryExpression",
        "start": 12,
        "end": 17,
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "decorators": [],
          "name": "quux",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
