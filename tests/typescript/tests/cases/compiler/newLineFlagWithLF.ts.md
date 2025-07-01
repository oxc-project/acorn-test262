__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 6,
            "end": 7
          },
          "definite": false,
          "start": 4,
          "end": 7
        }
      ],
      "declare": false,
      "start": 0,
      "end": 8
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 9,
          "end": 10
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 11,
          "end": 12
        },
        "start": 9,
        "end": 12
      },
      "directive": null,
      "start": 9,
      "end": 13
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 14
}
```
