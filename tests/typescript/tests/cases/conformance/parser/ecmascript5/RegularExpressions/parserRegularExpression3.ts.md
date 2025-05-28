__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 22,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 21,
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 3,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "UnaryExpression",
            "start": 4,
            "end": 20,
            "operator": "!",
            "argument": {
              "type": "Literal",
              "start": 5,
              "end": 20,
              "value": null,
              "raw": "/(\\\\?|&)adurl=/",
              "regex": {
                "flags": "",
                "pattern": "(\\\\?|&)adurl="
              }
            },
            "prefix": true
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
