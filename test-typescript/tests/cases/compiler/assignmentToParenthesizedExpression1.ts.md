__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 16,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 7,
      "end": 16,
      "expression": {
        "type": "AssignmentExpression",
        "start": 7,
        "end": 15,
        "operator": "=",
        "left": {
          "type": "SequenceExpression",
          "start": 8,
          "end": 12,
          "expressions": [
            {
              "type": "Literal",
              "start": 8,
              "end": 9,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          ]
        },
        "right": {
          "type": "Literal",
          "start": 14,
          "end": 15,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
