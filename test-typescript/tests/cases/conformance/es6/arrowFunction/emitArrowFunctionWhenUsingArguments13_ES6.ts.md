emitArrowFunctionWhenUsingArguments13_ES6.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 104,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 104,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 104,
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
            "end": 102,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 101,
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
                  "end": 101,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 85,
                    "end": 101,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 101,
                      "decorators": [],
                      "name": "_arguments",
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
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 71,
                      "end": 80,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false
                    }
                  ]
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
