emitArrowFunctionWhenUsingArguments03_ES6.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 31,
            "decorators": [],
            "name": "arguments",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 41,
            "end": 56,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 47,
              "end": 56,
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
