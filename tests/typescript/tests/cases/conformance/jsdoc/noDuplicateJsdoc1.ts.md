__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 33,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 33,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 21,
            "end": 32,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 25,
              "end": 32,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 31,
                "end": 32,
                "value": 0,
                "raw": "0"
              },
              "id": null,
              "generator": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
