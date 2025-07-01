__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 3
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "/(\\\\?|&)adurl=/",
              "regex": {
                "pattern": "(\\\\?|&)adurl=",
                "flags": ""
              },
              "start": 5,
              "end": 20
            },
            "prefix": true,
            "start": 4,
            "end": 20
          }
        ],
        "optional": false,
        "start": 0,
        "end": 21
      },
      "directive": null,
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
