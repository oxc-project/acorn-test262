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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 11,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 2,
            "end": 5,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 2,
              "end": 3,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 4,
              "end": 5,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 7,
            "end": 10,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 7,
              "end": 8,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 9,
              "end": 10,
              "raw": "7",
              "value": 7,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "decorators": [],
          "name": "f",
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
