__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 33,
      "expression": {
        "type": "NewExpression",
        "start": 0,
        "end": 32,
        "callee": {
          "type": "Identifier",
          "start": 4,
          "end": 12,
          "decorators": [],
          "name": "DataView",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 13,
            "end": 31,
            "callee": {
              "type": "Identifier",
              "start": 17,
              "end": 27,
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 28,
                "end": 30,
                "value": 32,
                "raw": "32"
              }
            ]
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
