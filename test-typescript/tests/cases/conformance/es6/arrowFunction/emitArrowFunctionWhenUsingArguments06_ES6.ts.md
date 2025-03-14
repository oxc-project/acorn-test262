emitArrowFunctionWhenUsingArguments06_ES6.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 78,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 78,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 46,
            "end": 76,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 50,
                "end": 75,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 54,
                  "end": 75,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 60,
                    "end": 75,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 75,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
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
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 38,
          "decorators": [],
          "name": "arguments",
          "optional": false
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
