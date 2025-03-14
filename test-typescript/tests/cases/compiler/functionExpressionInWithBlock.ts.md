functionExpressionInWithBlock.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 67,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 67,
        "body": [
          {
            "type": "WithStatement",
            "start": 16,
            "end": 65,
            "body": {
              "type": "BlockStatement",
              "start": 25,
              "end": 65,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 29,
                  "end": 62,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 42,
                    "end": 62,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 47,
                        "end": 58,
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "start": 47,
                          "end": 57,
                          "async": false,
                          "body": {
                            "type": "ThisExpression",
                            "start": 53,
                            "end": 57
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "params": []
                }
              ]
            },
            "object": {
              "type": "ObjectExpression",
              "start": 21,
              "end": 23,
              "properties": []
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
        "end": 10,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
