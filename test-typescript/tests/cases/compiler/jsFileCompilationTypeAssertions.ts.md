__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": null,
      "expression": {
        "type": "TSAsExpression",
        "start": 0,
        "end": 11,
        "expression": {
          "type": "Literal",
          "start": 0,
          "end": 1,
          "raw": "0",
          "value": 0
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 5,
          "end": 11
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 21,
            "end": 38,
            "expression": {
              "type": "Identifier",
              "start": 29,
              "end": 38,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 22,
              "end": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
