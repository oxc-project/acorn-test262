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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 29,
      "expression": {
        "type": "BinaryExpression",
        "start": 17,
        "end": 29,
        "left": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "module",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "in",
        "right": {
          "type": "ObjectExpression",
          "start": 27,
          "end": 29,
          "properties": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
