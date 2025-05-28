__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 19,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 18,
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 2,
            "end": 7,
            "left": {
              "type": "Identifier",
              "start": 2,
              "end": 3,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 6,
              "end": 7,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 9,
            "end": 17,
            "left": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "UnaryExpression",
              "start": 13,
              "end": 17,
              "operator": "+",
              "argument": {
                "type": "Literal",
                "start": 15,
                "end": 16,
                "value": 7,
                "raw": "7"
              },
              "prefix": true
            }
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
