__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 15,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 8,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 7,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 6,
            "end": 7,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 9,
      "end": 13,
      "expression": {
        "type": "AssignmentExpression",
        "start": 9,
        "end": 12,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 11,
          "end": 12,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
