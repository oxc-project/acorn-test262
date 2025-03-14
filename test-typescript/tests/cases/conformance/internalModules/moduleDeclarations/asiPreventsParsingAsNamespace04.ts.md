__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "module",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 29,
      "expression": {
        "type": "BinaryExpression",
        "start": 17,
        "end": 29,
        "operator": "in",
        "left": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "module",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 27,
          "end": 29,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
