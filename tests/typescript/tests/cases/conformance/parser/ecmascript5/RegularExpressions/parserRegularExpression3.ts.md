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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 21,
        "arguments": [
          {
            "type": "UnaryExpression",
            "start": 4,
            "end": 20,
            "argument": {
              "type": "Literal",
              "start": 5,
              "end": 20,
              "raw": "/(\\\\?|&)adurl=/",
              "regex": {
                "flags": "",
                "pattern": "(\\\\?|&)adurl="
              },
              "value": null
            },
            "operator": "!",
            "prefix": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 3,
          "decorators": [],
          "name": "Foo",
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
