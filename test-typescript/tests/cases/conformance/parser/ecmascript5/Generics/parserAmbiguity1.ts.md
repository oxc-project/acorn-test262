__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 14,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 14,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 13,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 2,
            "end": 12,
            "arguments": [
              {
                "type": "Literal",
                "start": 10,
                "end": 11,
                "raw": "7",
                "value": 7,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2,
              "end": 3,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3,
              "end": 9,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 4,
                  "end": 5,
                  "typeArguments": null,
                  "typeName": {
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
                  "type": "TSTypeReference",
                  "start": 7,
                  "end": 8,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 8,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
