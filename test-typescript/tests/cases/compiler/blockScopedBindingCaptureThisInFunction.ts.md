__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 164,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 164,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 56,
        "end": 163,
        "async": false,
        "body": {
          "type": "FunctionExpression",
          "start": 62,
          "end": 163,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 74,
            "end": 163,
            "body": [
              {
                "type": "ForInStatement",
                "start": 80,
                "end": 161,
                "body": {
                  "type": "BlockStatement",
                  "start": 104,
                  "end": 161,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 114,
                      "end": 132,
                      "expression": {
                        "type": "CallExpression",
                        "start": 114,
                        "end": 131,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 114,
                          "end": 129,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 114,
                            "end": 118
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 129,
                            "decorators": [],
                            "name": "helloWorld",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 141,
                      "end": 155,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 141,
                        "end": 154,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 154,
                          "decorators": [],
                          "name": "someKey",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                },
                "left": {
                  "type": "VariableDeclaration",
                  "start": 85,
                  "end": 96,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 89,
                      "end": 96,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 96,
                        "decorators": [],
                        "name": "someKey",
                        "optional": false
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 100,
                  "end": 102,
                  "properties": []
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
