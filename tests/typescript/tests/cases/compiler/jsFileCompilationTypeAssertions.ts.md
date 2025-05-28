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
      "expression": {
        "type": "TSAsExpression",
        "start": 0,
        "end": 11,
        "expression": {
          "type": "Literal",
          "start": 0,
          "end": 1,
          "value": 0,
          "raw": "0"
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 5,
          "end": 11
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 39,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 38,
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
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 22,
              "end": 28
            },
            "expression": {
              "type": "Identifier",
              "start": 29,
              "end": 38,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
