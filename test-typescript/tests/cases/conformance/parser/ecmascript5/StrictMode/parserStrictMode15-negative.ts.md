__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 26,
      "expression": {
        "type": "UnaryExpression",
        "start": 14,
        "end": 25,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 21,
          "end": 25,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
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
