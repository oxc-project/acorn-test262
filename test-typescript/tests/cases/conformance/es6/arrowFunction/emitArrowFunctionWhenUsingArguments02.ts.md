emitArrowFunctionWhenUsingArguments02.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 26,
            "end": 41,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 32,
              "end": 41,
              "decorators": [],
              "name": "arguments",
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
