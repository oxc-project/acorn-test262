usePromiseFinally.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "promise1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 15,
            "end": 96,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 82,
                "end": 95,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 93,
                  "end": 95,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 15,
              "end": 81,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 15,
                "end": 56,
                "arguments": [
                  {
                    "type": "FunctionExpression",
                    "start": 27,
                    "end": 55,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 53,
                      "end": 55,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 36,
                        "end": 43,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 45,
                        "end": 51,
                        "decorators": [],
                        "name": "reject",
                        "optional": false
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 26,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 81,
                "decorators": [],
                "name": "finally",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
