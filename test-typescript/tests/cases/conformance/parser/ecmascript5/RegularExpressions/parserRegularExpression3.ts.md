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
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "UnaryExpression",
            "start": 4,
            "end": 20,
            "operator": "!",
            "prefix": true,
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
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
