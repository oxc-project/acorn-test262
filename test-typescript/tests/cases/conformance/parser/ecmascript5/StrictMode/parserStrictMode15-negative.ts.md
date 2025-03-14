parserStrictMode15-negative.ts
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
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 26,
      "expression": {
        "type": "UnaryExpression",
        "start": 14,
        "end": 25,
        "argument": {
          "type": "MemberExpression",
          "start": 21,
          "end": 25,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
}
```
