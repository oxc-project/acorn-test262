a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "30",
            "value": 30
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 19,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 18,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 16,
          "end": 18,
          "raw": "10",
          "value": 10
        }
      }
    }
  ],
  "sourceType": "module"
}
```
