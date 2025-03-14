parenthesizedAsyncArrowFunction.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 33,
            "end": 49,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 39,
                "end": 42,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
