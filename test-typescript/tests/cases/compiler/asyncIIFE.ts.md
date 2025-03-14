__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 106,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 106,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 20,
            "end": 88,
            "expression": {
              "type": "CallExpression",
              "start": 20,
              "end": 87,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 21,
                "end": 84,
                "async": true,
                "body": {
                  "type": "BlockStatement",
                  "start": 33,
                  "end": 84,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 43,
                      "end": 51,
                      "expression": {
                        "type": "AwaitExpression",
                        "start": 43,
                        "end": 51,
                        "argument": {
                          "type": "Literal",
                          "start": 49,
                          "end": 51,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    },
                    {
                      "type": "ThrowStatement",
                      "start": 60,
                      "end": 78,
                      "argument": {
                        "type": "NewExpression",
                        "start": 66,
                        "end": 77,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 75,
                          "decorators": [],
                          "name": "Error",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              },
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 94,
            "end": 104,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 98,
                "end": 103,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 102,
                  "end": 103,
                  "raw": "1",
                  "value": 1
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
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
