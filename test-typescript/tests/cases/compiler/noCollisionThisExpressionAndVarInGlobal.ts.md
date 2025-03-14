noCollisionThisExpressionAndVarInGlobal.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "_this",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 13,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 23,
            "end": 34,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 29,
              "end": 34,
              "decorators": [],
              "name": "_this",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
