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
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1,
          "end": 4,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 7,
          "end": 10,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "name": "quux",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
