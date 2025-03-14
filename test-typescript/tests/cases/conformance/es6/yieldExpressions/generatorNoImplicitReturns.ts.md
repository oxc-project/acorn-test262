__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 102,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 2,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 101,
        "body": [
          {
            "type": "IfStatement",
            "start": 34,
            "end": 80,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 59,
              "end": 80,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 68,
                  "end": 75,
                  "argument": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 38,
              "end": 57,
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "start": 38,
                "end": 51,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 38,
                  "end": 49,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 42,
                    "decorators": [],
                    "name": "Math",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 49,
                    "decorators": [],
                    "name": "random",
                    "optional": false
                  }
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 54,
                "end": 57,
                "raw": "0.5",
                "value": 0.5
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 84,
            "end": 98,
            "expression": {
              "type": "YieldExpression",
              "start": 84,
              "end": 97,
              "argument": {
                "type": "Literal",
                "start": 90,
                "end": 97,
                "raw": "'hello'",
                "value": "hello"
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 25,
        "decorators": [],
        "name": "testGenerator",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
