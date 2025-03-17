__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 12,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 11,
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
            "end": 5,
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
              "start": 4,
              "end": 5,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 7,
            "end": 10,
            "left": {
              "type": "Identifier",
              "start": 7,
              "end": 8,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Literal",
              "start": 9,
              "end": 10,
              "value": 7,
              "raw": "7"
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
