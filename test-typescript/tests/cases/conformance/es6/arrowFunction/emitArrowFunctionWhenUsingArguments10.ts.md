emitArrowFunctionWhenUsingArguments10.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 94,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 94,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 94,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 56,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 51,
                  "decorators": [],
                  "name": "_arguments",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 54,
                  "end": 56,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 62,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 91,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 70,
                  "end": 91,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 76,
                    "end": 91,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 91,
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
      "params": []
    }
  ],
  "sourceType": "script"
}
```
