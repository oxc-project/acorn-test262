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
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 21,
            "end": 29
          },
          "definite": false,
          "start": 17,
          "end": 29
        }
      ],
      "declare": false,
      "start": 13,
      "end": 30
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
          "start": 31,
          "end": 32
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 35,
          "end": 36
        },
        "start": 31,
        "end": 36
      },
      "directive": null,
      "start": 31,
      "end": 37
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 37
}
```
