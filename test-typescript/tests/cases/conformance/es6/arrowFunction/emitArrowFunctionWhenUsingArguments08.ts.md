emitArrowFunctionWhenUsingArguments08.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 87,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 87,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 87,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 46,
            "end": 85,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 50,
                "end": 84,
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
                  "end": 84,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 60,
                    "end": 84,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 84,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 70,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      }
                    ]
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
