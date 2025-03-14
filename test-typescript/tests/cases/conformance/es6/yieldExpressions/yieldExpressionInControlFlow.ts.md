__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 106,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 105,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 105,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 47,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 51,
                "end": 57,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 55,
                  "end": 57,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "WhileStatement",
            "start": 62,
            "end": 103,
            "body": {
              "type": "BlockStatement",
              "start": 75,
              "end": 103,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 85,
                  "end": 97,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 85,
                    "end": 97,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "o",
                      "optional": false
                    },
                    "right": {
                      "type": "YieldExpression",
                      "start": 89,
                      "end": 97,
                      "argument": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "o",
                        "optional": false
                      },
                      "delegate": true
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 69,
              "end": 73,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
