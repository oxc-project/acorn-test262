collisionThisExpressionAndClassInGlobal.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 15,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "_this",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 24,
            "end": 34,
            "async": false,
            "body": {
              "type": "ThisExpression",
              "start": 30,
              "end": 34
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
