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
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 1
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 2,
              "end": 3
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4,
                    "end": 5
                  },
                  "typeArguments": null,
                  "start": 4,
                  "end": 5
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7,
                    "end": 8
                  },
                  "typeArguments": null,
                  "start": 7,
                  "end": 8
                }
              ],
              "start": 3,
              "end": 9
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 7,
                "raw": "7",
                "start": 10,
                "end": 11
              }
            ],
            "optional": false,
            "start": 2,
            "end": 12
          }
        ],
        "optional": false,
        "start": 0,
        "end": 13
      },
      "directive": null,
      "start": 0,
      "end": 14
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 14
}
```
