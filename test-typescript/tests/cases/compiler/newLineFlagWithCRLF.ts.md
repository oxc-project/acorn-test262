__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 14,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 6,
            "end": 7,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 9,
      "end": 13,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 9,
        "end": 12,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 11,
          "end": 12,
          "raw": "2",
          "value": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
