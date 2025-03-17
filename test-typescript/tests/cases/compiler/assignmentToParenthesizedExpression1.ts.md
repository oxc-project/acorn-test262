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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ]
        },
        "right": {
          "type": "Literal",
          "start": 14,
          "end": 15,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
