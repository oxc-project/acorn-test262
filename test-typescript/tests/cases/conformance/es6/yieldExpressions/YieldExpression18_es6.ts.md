__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
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
      "end": 25,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 14,
        "end": 24,
        "arguments": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 14,
          "end": 19,
          "decorators": [],
          "name": "yield",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
