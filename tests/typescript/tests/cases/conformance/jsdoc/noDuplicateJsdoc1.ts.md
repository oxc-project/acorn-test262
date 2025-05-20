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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 32,
          "definite": false,
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
              "async": false,
              "body": {
                "type": "Literal",
                "start": 31,
                "end": 32,
                "raw": "0",
                "value": 0
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
