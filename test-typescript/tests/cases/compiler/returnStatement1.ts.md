returnStatement1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 97,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 97,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 19,
            "end": 66,
            "argument": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 65,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 49,
                    "end": 59,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 58,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "decorators": [],
                          "name": "s",
                          "optional": false
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 95,
            "expression": {
              "type": "Literal",
              "start": 72,
              "end": 93,
              "raw": "\"harmless extra line\"",
              "value": "harmless extra line"
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
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
