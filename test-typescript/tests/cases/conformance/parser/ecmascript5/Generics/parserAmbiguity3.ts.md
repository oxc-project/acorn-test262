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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 2,
            "end": 7,
            "left": {
              "type": "Identifier",
              "start": 2,
              "end": 3,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 6,
              "end": 7,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "UnaryExpression",
              "start": 13,
              "end": 17,
              "operator": "+",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 15,
                "end": 16,
                "value": 7,
                "raw": "7"
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
