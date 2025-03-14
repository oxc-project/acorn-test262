parser_continueNotInIterationStatement4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 60,
      "body": {
        "type": "WhileStatement",
        "start": 5,
        "end": 60,
        "body": {
          "type": "BlockStatement",
          "start": 17,
          "end": 60,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 21,
              "end": 58,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 25,
                  "end": 58,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 29,
                    "end": 58,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 35,
                      "end": 58,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 41,
                          "end": 54,
                          "label": {
                            "type": "Identifier",
                            "start": 50,
                            "end": 53,
                            "decorators": [],
                            "name": "TWO",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false,
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
        "test": {
          "type": "Literal",
          "start": 12,
          "end": 16,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 3,
        "decorators": [],
        "name": "TWO",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
