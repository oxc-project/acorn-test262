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
            "start": 19,
            "end": 20
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 23,
            "end": 31
          },
          "definite": false,
          "start": 19,
          "end": 31
        }
      ],
      "declare": false,
      "start": 15,
      "end": 32
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
          "start": 33,
          "end": 34
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 37,
          "end": 38
        },
        "start": 33,
        "end": 38
      },
      "directive": null,
      "start": 33,
      "end": 39
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 39
}
```
