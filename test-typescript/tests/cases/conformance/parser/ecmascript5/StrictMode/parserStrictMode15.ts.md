__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
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
        "value": "use strict",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 23,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 14,
        "end": 22,
        "argument": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
