superCallFromFunction1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 53,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 21,
            "end": 51,
            "expression": {
              "type": "CallExpression",
              "start": 21,
              "end": 50,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 27,
                  "end": 49,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 36,
                    "end": 49,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 48,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 42,
                      "decorators": [],
                      "name": "String",
                      "optional": false
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 27,
                      "end": 32,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Super",
                "start": 21,
                "end": 26
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
